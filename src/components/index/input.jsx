import React, {Component} from 'React';

import moment from 'moment';

import {Input, DatePicker} from 'antd';

export default class InputComponent extends React.Component {

    state = {
        eventtime: null,
        eventmemo: '',
        open: false
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props !== nextProps || this.state !== nextState;
    // }

    disabledDate = current => {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now();
    }

    handleOpenChange = open => {
        this.setState({
            open:!this.state.open
        });
    }

    handleDateChange = date => {
        this.setState({
            eventtime: date
        });
        this.props.getTime(moment(date._d).format('YYYY-MM-DD hh:mm:ss'))
    }

    setError = error => {
        this.setState({error});
    }

    handleTextChange = e => {
        const {error} = this.state;
        if(error) {
            this.setError(false);
        }
        this.setState({
            eventmemo: e.target.value
        });
         this.props.getValue(e.target.value)
    }
     resetForm = () => {
         alert(111)
        // this.setState({
        //    memos:"",
        //    memonsdate:""
        // })
    }

    // getFormDate = () => {
    //     const {eventtime, eventmemo} = this.state;
    //     //没有选择时间打开弹层
    //     if(!eventtime){
    //         this.handleOpenChange(true);
    //         return false;
    //     }
    //     if(eventmemo === ''){
    //         // this.refs.Textrea.focus();
    //         this.setError(true);
    //         return false;
    //     }
    //     const formatTime = moment(eventtime).format('YYYY-MM-DD hh:mm');
    //     return {...{eventtime: formatTime}, eventmemo};
    // }
    render() {
        const {timePlaceholder='', memoPlaceholder='', error } = this.props;
        const {eventtime, open, eventmemo} = this.state;
        return (
            <ul>
                <li className="table">
                    <div className="table-cell" style={{marginBottom: 17}}>
                        <span  className="memo-field">预处理时间</span>
                    </div>
                    <div className="table-cell">
                        <DatePicker
                            showTime
                            value={eventtime}
                            className="eventtime"
                            format='YYYY-MM-DD hh:mm:ss'
                            showToday={false}
                            placeholder={timePlaceholder}
                            open={error.errorTime?!open:open}
                            onOpenChange={this.handleOpenChange}
                            style={{
                                width: 263,
                                marginLeft: 14
                            }}
                            onChange={this.handleDateChange}
                        />
                    </div>
                </li>
                <li className="table"
                    style={{marginTop: 17}}
                >
                    <div className="table-cell"
                         style={{verticalAlign: "top"}}
                    >
                        <span className="memo-field">添加备忘录</span>
                    </div>
                    <div className="table-cell">  
                        <Input 
                            type="textarea"
                            className={error.errorText ? 'error.errorText' : ''}
                            placeholder={memoPlaceholder}
                            style={{
                                width: 263, 
                                height: 85,
                                resize: "none", 
                                marginLeft: 14
                            }}
                            value={eventmemo}
                            onChange={this.handleTextChange}
                        />
                        {error.errorText && 
                            <div className="error-promote">
                                <label className="error">&nbsp;&nbsp;请输入备忘录内容</label>
                            </div>
                        }
                    </div>
                </li>
            </ul>
        );
    }

}