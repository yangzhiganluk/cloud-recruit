import React, {Component} from 'react';

import {Icon , Modal} from 'antd';

import PlusAttachmentModal from './attactment-modal'; 

import forEach from 'lodash/forEach';
import pickBy from 'lodash/pickBy';

import LoadingComponent from 'components/loading';

//redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class MaterialAttach extends Component {

    state = {
        itemData: {},
        basicData: [],      //基本资料
        basic_data: [],      //基本资料
        beforeData: [],     //档案附件
        before_data: [],     //档案附件
        afterData: [],      //离职资料
        after_data: [],      //离职资料
        rid:'',
    }

    componentDidMount(){
        const rid = this.props.data.resumeoff.rid+'';
        this.props.queryEmployee({rid});
        
    }

    componentWillReceiveProps(nextProps){
        const {
            basicData= [],
            beforeData= [],
            afterData= [],
            basic_data = [],
            before_data = [],
            after_data = []
        } = this.state;
        nextProps.list.forEach((item,key) => {
            switch(item.type){
                case 1 : 
                    item.attachment_type.forEach((acts) => {basic_data.push(acts)});break;
                case 2 : 
                    item.attachment_type.forEach((acts) => {before_data.push(acts)});break;
                case 3 : 
                    item.attachment_type.forEach((acts) => {after_data.push(acts)});break;
            }
        })
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
        if(nextProps.listAll.length!=0){
            this.setState({
                isLoading:false
            })
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        return nextState !== this.state || nextProps !== this.props;
    }

    handleAttachmentClick = (itemData) => {
        //console.log(itemData.parmentType)//判断属于那列信息 itemData.type判断具体属于那列信息
        //console.log(this.props.data.list)//通过与type区别属于那列信息  通过attachment_type里面的typeId来来判断取哪个数据的文件名
        const {rid} = this.props.params;
       this.setState({
           itemData,
           rid
        });
       this.props.showAttachmentModal();
    }

    showImageModal = (itemData) => {
        console.log(itemData);
        // const filenameArr =[];
         const {showImageModal} = this.props;
        // this.props.data.list.forEach((value,index) => {
        //     if(itemData.parmentType==value.type){
        //         value.attachment_type.forEach((item,index)=>{
        //             if(item.typeId==itemData.type){
        //                 filenameArr.push(item.filename)
        //                 //this.props.viewUploadAttachment(item.filename,showImageModal)
        //             }
        //             this.props.viewUploadAttachment(filenameArr,showImageModal)  
        //         })
        //     }
        // })
        this.props.viewUploadAttachment(itemData,showImageModal);
        this.props.showImageModal()
    }
    hideImageModal = () =>{
        this.props.hideImageModal();//隐藏预览框
        this.props.cancelImageUrl();//清空图片地址
    }

    render() {
        const {
            itemData,
            basicData=[],
            beforeData=[],
            afterData=[],
            basic_data = [],
            before_data = [],
            after_data = [],
            rid,
            isLoading=true
        } = this.state;
        const {imageUrl , imageVisible, showImageModal, hideImageModal} = this.props;
        // console.log(this.props.data)
        console.log(imageUrl);
        return (
            <div className="material-attach clerk-tab-container">
                {isLoading && 
                    <LoadingComponent style={{
                        position: 'absolute',
                        top: 100,
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#FFF',
                        zIndex: 2
                    }} />
                }
                <ul>
                    <li className="clerk-list-item"
                        style={{position:"relative"}}>
                        <div className="info-field">
                            <h3 className="title">基本资料</h3>
                            {
                                basicData.map((value,index) => {
                                    const {name,isShow,type} = value;
                                    return(
                                        <div key={name} 
                                             className="add-attactment" 
                                             style={{display: isShow==1 ? 'inline-block' : 'none'}}
                                        >
                                            <Icon type="plus-circle-o"
                                                onClick={this.handleAttachmentClick.bind(this,value)}
                                                style={{ 
                                                    fontSize: 45, 
                                                    color: '#d2d2d2',
                                                }}
                                            />
                                            <p style={{marginBottom:10}}>{name}</p>
                                            {
                                                basic_data.map((item,index) => {
                                                    if (item.typeId==type){
                                                        return (<span 
                                                                    key={index}
                                                                    onClick={this.showImageModal.bind(this,item.filename)}
                                                                >预览</span>)
                                                    }
                                                })
                                            }
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
                                    const {name,isShow,type} = value;
                                    return(
                                            <div key={name} 
                                                className="add-attactment" 
                                                
                                                style={{display: isShow==1 ? 'inline-block' : 'none'}}
                                            >
                                                <Icon type="plus-circle-o"
                                                    onClick={this.handleAttachmentClick.bind(this,value)}
                                                    style={{ 
                                                        fontSize: 45, 
                                                        color: '#d2d2d2',
                                                    }}
                                                />
                                                <p style={{marginBottom:10}}>{name}</p>
                                                {
                                                    before_data.map((item,index) => {
                                                        if (item.typeId==type){
                                                            return (<span 
                                                                        key={index}
                                                                        onClick={this.showImageModal.bind(this,item.filename)}
                                                                    >预览</span>)
                                                        }
                                                    })
                                                }
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
                                    const {name,isShow,type} = value;
                                    return(
                                        <div key={name} 
                                             className="add-attactment" 
                                             style={{display: isShow==1 ? 'inline-block' : 'none'}}
                                        >
                                            <Icon type="plus-circle-o"
                                                onClick={this.handleAttachmentClick.bind(this,value)}
                                                style={{ 
                                                    fontSize: 45, 
                                                    color: '#d2d2d2',
                                                }}
                                            />
                                            <p style={{marginBottom:10}}>{name}</p>
                                            {
                                                after_data.map((item,index) => {
                                                    if (item.typeId==type){
                                                        return (<span 
                                                                    key={index}
                                                                    onClick={this.showImageModal.bind(this,item.filename)}
                                                                >预览</span>)
                                                    }
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>    
                    </li>
                </ul>
                <PlusAttachmentModal {...this.props} itemData={itemData} rid={rid}/> 
                <Modal
                    title="图片预览"
                    wrapClassName="grey-close-header "
                    visible={imageVisible}
                    onCancel={this.hideImageModal}
                >
                    <div style={{width:500,height:500,margin:'0 auto'}}>
                        <img src={imageUrl} 
                            style={{width:'100%',height:'100%'}}
                        />
                        {/* {
                            imageUrl.length==0?<span style={{fontSize:18,color:'#D4D4D4'}}>暂未上传附件</span>
                                                :
                                                        imageUrl.map((item,index)=>{
                                                            return <div style={{width:'25%',height:'25%',margin:12,float:'left'}}>
                                                                        <img src={item} 
                                                                            style={{width:'100%',height:'100%'}}
                                                                        />
                                                                    </div>
                                                                
                                                        })
                        }  */}
                    </div>  
                </Modal>                   
            </div>
        );
    }
}

const mapStateToProps = state => ({
    attactmentModal: state.Manage.attactmentModal,
    imageUrl: state.Manage.imageUrl,
    imageVisible: state.Manage.imageVisible
})

const mapDispatchToProps = dispatch => ({
    showAttachmentModal: bindActionCreators(Actions.ManageActions.showAttachmentModal,dispatch),
    hideAttachmentModal: bindActionCreators(Actions.ManageActions.hideAttachmentModal,dispatch),
    DeleteMaterial: bindActionCreators(Actions.ManageActions.DeleteMaterial,dispatch),
    viewUploadAttachment: bindActionCreators(Actions.ManageActions.viewUploadAttachment,dispatch),
    downloadUploadAttachment: bindActionCreators(Actions.ManageActions.downloadUploadAttachment,dispatch),
    showImageModal: bindActionCreators(Actions.ManageActions.showImageModal,dispatch),
    hideImageModal: bindActionCreators(Actions.ManageActions.hideImageModal,dispatch),
    cancelImageUrl: bindActionCreators(Actions.ManageActions.cancelImageUrl,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MaterialAttach)