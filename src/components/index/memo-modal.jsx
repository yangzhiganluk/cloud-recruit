import React , { Component } from "React"
import {Modal , Tabs , Input , Icon} from 'antd';

import InputComponent from './input';
import pickBy from 'lodash/pickBy';

//redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class MemoModalComponent extends Component {
    
    state = {
        memos:'',
        memonsdate: null,
        errorText: false,
        errorTime: false
    }
    //备忘录内容
    addMemo = (value) => {
        this.setState({
           memos:value
        })
    }
    //时间
    addTime = (value) => {
        this.setState({
           memonsdate:value
        })
    }
    //添加备忘录
    addMemoValue = () =>{
        const {memonsdate, memos} = this.state;
       //没有选择时间打开弹层
        if(!memonsdate){
            this.setState({
                errorTime:true
            })
            return false
        }else {
            this.setState({
                errorTime:false
            })
        }
        if(memos === ''){
             //this.refs.textarea.focus();
            this.setState({
                errorText:true
            })
            return false
        }else {
            this.setState({
                errorText:false
            })
        }
        const filterObj = pickBy(this.state,(val,key)=>{
            return val !== false;
        });
        this.props.hideMemoModal()
        this.props.addMemoContent({...this.state})
        setTimeout(()=>{
             this.props.getMemoContent() 
        },500)  
    }

    render(){
       const {memoModalVisible} = this.props
        return(
            <Modal
                title="添加备忘录"
                visible = {memoModalVisible}
                className = "add-memo-modal grey-close-header"
                onCancel = {() => this.props.hideMemoModal()}
                width = {510}
                okText = "添加"
                onOk = {this.addMemoValue}
            >
                <div className="memo-body">
                    <InputComponent
                        getTime = {this.addTime}
                        getValue = {this.addMemo}
                        error = {{...this.state}}
                        timePlaceholder="请填写预处理时间"
                        memoPlaceholder="将文本添加到备忘录......"
                    />
                </div>
            </Modal>
        )
    }
}
const mapStateToProps = state => ({
    memoModalVisible: state.Home.memoModalVisible
})
const mapDispatchToProps = dispatch => ({
    hideMemoModal: bindActionCreators(Actions.homeActions.hideMemoModal, dispatch),
    addMemoContent: bindActionCreators(Actions.homeActions.addMemoContent, dispatch),
})
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(MemoModalComponent)