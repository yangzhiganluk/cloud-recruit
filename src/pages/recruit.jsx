import React, {Component} from 'react';

import ScrollPageContent from 'components/scroll-page-content';
import LeftNav from 'components/job/nav';
import BreadCrumbComponent from 'components/breadcrumb';

import NavData from 'data/nav/recruit';

import FormComponents from 'components/recruit/form';
import TableComponents from 'components/recruit/table';

// lodash
import isEqual from 'lodash/isEqual';

// 招聘人员详细信息Modal页面
import ResumeModalComponent from 'components/resume-modal';
// 上传简历Modal
import UploadResumeModalComponents from 'components/recruit/upload-resume-modal';
// 职位推荐Modal
import RecommendResumeModalComponents from 'components/recruit/recommend-resume-modal'

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class RecruitPage extends Component {

    state = {
        paginationCurrent: 1
    }

    // 子框架是否刷新
    isIframeRefresh = false;

    params = {
        stageid: '0',
        skip: 0
    };

    formData = {
    };

    componentDidMount() {
        NProgress.done();
        const {params,getRecruitCategory} = this.props,
            {stageid} = params;
        getRecruitCategory();
        if(stageid){
            this.params.stageid = stageid;
            this.refs.LeftNav.setSelectedIndex(parseInt(stageid));
        }
        this._requestData();
        // 监听简历详情页面是否发生流程更改
        window.addEventListener('message',e=>{
            const {data} = e;
            if(data === 'rerequest'){
                this.isIframeRefresh = true;
            }
        });
    }

    componentWillUpdate(nextProps,nextState) {
        if(nextProps.visible !== this.props.visible || this.isIframeRefresh){
            this.isIframeRefresh = false;
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        return this.props.isLoading !== nextProps.isLoading || 
            this.props.categoryData !== nextProps.categoryData ||
            this.state.paginationCurrent !== nextState.paginationCurrent;
    }

    _requestData(){
        this.props.getRecruitList({...this.params,...this.formData});
    }

     _getNavData(){
        const {categoryData} = this.props;
        categoryData.forEach((item,index)=>{
            return NavData[index].num = item[index];
        });
        return NavData;
    }

    handleClickNav = type => {
        this.params.stageid = type;
        // this.params.skip = 0;
        // this.setPaginationCurrent(1);
        // this._requestData();
        this.refs.FormComponents.resetForm(true);
    }

    handleFind = (params,clickNav=false) => {
        // 点击开始查找按钮
        if(isEqual(this.formData,params)&&!clickNav) return ;
        this.formData = params;
        this.params.skip = 0;
        this.setPaginationCurrent(1);
        this._requestData();
    }

    paginationChange = (page,pageSize) => {
        // 点击分页器
        this.params.skip = (page - 1) * 20;
        this._requestData();
        this.setPaginationCurrent(page);
    }

    setPaginationCurrent = paginationCurrent => {
        this.setState({paginationCurrent});
    }

    onModalChange = () => {
        if(this.isIframeRefresh){
            this.props.getRecruitCategory();
            this._requestData();
        }
    }

    render() {
        const {paginationCurrent} = this.state;
        const {routes,isLoading} = this.props;
        return (
            <ScrollPageContent>
                <div className="page-content recruit-page">
                    <BreadCrumbComponent routes={routes} />
                    <div className="list-block">
                        <div className="pull-left">
                            <LeftNav
                                ref="LeftNav"
                                title="招聘分类" 
                                isLoading={isLoading}
                                data={this._getNavData()}
                                onClick={this.handleClickNav} 
                            />
                        </div>
                        <div className="pull-right">
                            <div className="box-border right-panel">
                                <FormComponents
                                    ref="FormComponents"
                                    findEvent={this.handleFind} 
                                    showUploadModal={this.props.showUploadModal}
                                />
                                <TableComponents
                                    paginationChange={this.paginationChange}
                                    paginationCurrent={paginationCurrent}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/*招聘人员详细信息Modal页面*/}
                <ResumeModalComponent onChange={this.onModalChange} />
                {/*上传简历Modal*/}
                <UploadResumeModalComponents />
                {/*职位推荐Modal*/}
                <RecommendResumeModalComponents />
            </ScrollPageContent>
        );
    }
}

const mapStateToProps = state => ({
    visible: state.Recruit.visible,
    isLoading: state.Recruit.isCategoryLoading,
    categoryData: state.Recruit.categoryData, // 统计列表数据
})
const mapDispatchToProps = dispatch => ({
    getRecruitCategory: bindActionCreators(Actions.RecruitActions.getRecruitCategory, dispatch),
    getRecruitList: bindActionCreators(Actions.RecruitActions.getRecruitList, dispatch),
    showUploadModal: bindActionCreators(Actions.RecruitActions.showUploadModal, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecruitPage);