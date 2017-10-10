import React, {Component} from 'react';

import {Icon} from 'antd';

import PlusAttachmentModal from './attactment-modal'; 

// const basicData=['身份证原件','学历证明','个人证件照','身份证复印件','工资银行卡','社保卡'];
// const beforeData=['劳动合同','入职登记表','入职体检报告','上家公司离职证明','其他'];
// const afterData=['离职证明','离职交接表'];

import forEach from 'lodash/forEach';
import pickBy from 'lodash/pickBy';

//redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class MaterialAttach extends Component {

    state = {
        itemData: {},
        basicData: [],      //基本资料
        beforeData: [],     //档案附件
        afterData: []       //离职资料
    }

    componentWillReceiveProps(nextProps){
        const {
            basicData= [],
            beforeData= [],
            afterData= []
        } = this.state;
        nextProps.listAll.forEach((value,index) => {
            switch(value.type){
                case 1 : 
                    value.list.forEach((item) => {basicData.push(item)});break;
                case 2 : 
                    value.list.forEach((item) => {beforeData.push(item)});break;
                case 3 : 
                    value.list.forEach((item) => {afterData.push(item)});break;
            }
        })
        this.setState({
            basicData,
            beforeData,
            afterData
        });
    }

    shouldComponentUpdate(nextProps,nextState) {
        return nextState !== this.state || nextProps !== this.props;
    }

    handleAttachmentClick = (itemData) => {
       this.setState({itemData});
       this.props.showAttachmentModal();
    }

    render() {
        const {
            itemData,
            basicData=[],
            beforeData=[],
            afterData=[]
        } = this.state;
        return (
            <div className="material-attach clerk-tab-container">
                <ul>
                    <li className="clerk-list-item"
                        style={{position:"relative"}}>
                        <div className="info-field">
                            <h3 className="title">基本资料</h3>
                            {
                                basicData.map((value,index) => {
                                    const {name,isShow} = value;
                                    return(
                                        <div key={name} 
                                             className="add-attactment" 
                                             onClick={this.handleAttachmentClick.bind(this,value)}
                                             style={{display: isShow==1 ? 'inline-block' : 'none'}}
                                        >
                                            <Icon type="plus-circle-o"
                                                style={{ 
                                                    fontSize: 45, 
                                                    color: '#d2d2d2',
                                                }}
                                            />
                                            <p>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </li>
                    <li className="clerk-list-item"
                        style={{position:"relative"}}>
                        <div className="info-field">
                            <h3 className="title">档案附件</h3>
                            {
                                beforeData.map((value,index) => {
                                    const {name,isShow} = value;
                                    return(
                                        <div key={name} 
                                             className="add-attactment" 
                                             onClick={this.handleAttachmentClick.bind(this,value)}
                                             style={{display: isShow==1 ? 'inline-block' : 'none'}}
                                        >
                                            <Icon type="plus-circle-o"
                                                style={{ 
                                                    fontSize: 45, 
                                                    color: '#d2d2d2',
                                                }}
                                            />
                                            <p>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </li>
                    <li className="clerk-list-item"
                        style={{position:"relative"}}>
                        <div className="info-field">
                            <h3 className="title">离职资料</h3>
                            {
                                afterData.map((value,index) => {
                                    const {name,isShow} = value;
                                    return(
                                        <div key={name} 
                                             className="add-attactment" 
                                             onClick={this.handleAttachmentClick.bind(this,value)}
                                             style={{display: isShow==1 ? 'inline-block' : 'none'}}
                                        >
                                            <Icon type="plus-circle-o"
                                                style={{ 
                                                    fontSize: 45, 
                                                    color: '#d2d2d2',
                                                }}
                                            />
                                            <p>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>    
                    </li>
                </ul>
                <PlusAttachmentModal {...this.props} itemData={itemData}/>                    
            </div>
        );
    }
}

const mapStateToProps = state => ({
    attactmentModal: state.Manage.attactmentModal
})

const mapDispatchToProps = dispatch => ({
    showAttachmentModal: bindActionCreators(Actions.ManageActions.showAttachmentModal,dispatch),
    hideAttachmentModal: bindActionCreators(Actions.ManageActions.hideAttachmentModal,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MaterialAttach)