import React, { Component, PropTypes } from 'react';

import { Input, Select, DatePicker } from 'antd';
const Option = Select.Option;


export class ErrorInputComponent extends Component {
    state = {
        error: false                    //必填项是否为空
    }
    static propTypes = {
        name: PropTypes.string,         //输入框前名称
        field: PropTypes.string,
        value: PropTypes.oneOfType([    //输入框的值
            PropTypes.string,
            PropTypes.number
        ]),
        placeholder: PropTypes.string,  //输入框提示信息
        onChange: PropTypes.func,       //输入框方法
        disabled: PropTypes.bool,       //是否禁用输入框
        className: PropTypes.string,    // 输入框类名
        style: PropTypes.object,        // 输入框内联样式
        asterisk: PropTypes.bool        //是否是必填项
    }

    triggerError = (error) => {
        this.setState({ error });
    }

    handleChange = (field, event) => {
        const { error } = this.state;
        const { onChange } = this.props;
        if (error) {
            this.triggerError(false);
        }
        if (onChange) {
            onChange(field, event);
        }
    }

    //判断必选框是否为空
    handleBlur = () => {
        const { value } = this.props;
        if (value === '') {
            this.triggerError(true);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value || nextState.error !== this.state.error;
    }

    render() {
        const { error } = this.state,
            {
                name = '',
                field = '',
                value,
                placeholder,
                disabled = false,
                className = '',
                style = {},
                asterisk = false,
            } = this.props;
        return (
            <div className="inline-block" >
                <span className={asterisk ? "required-asterisk" : ''}>{name}</span>
                <div className="inline-block" style={{
                    position: 'relative',
                    marginRight: 0
                }}>
                    <Input
                        ref='input'
                        placeholder={placeholder}
                        value={value}
                        onChange={this.handleChange.bind(this, field)}
                        disabled={disabled}
                        className={error&&asterisk ? 'error' : ''}
                        style={style}
                        onBlur={this.handleBlur}
                    />
                    {error&&asterisk &&
                        <div className="error-promote" style={{
                            paddingLeft: 0
                        }}>
                            <label className="error">必填</label>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export class SelectComponent extends Component {

    static PropTypes = {
        name: PropTypes.string,
        field: PropTypes.string,
        value: PropTypes.string,
        data: PropTypes.array,
        placeholder: PropTypes.string,
        dropdownMatchSelectWidth: PropTypes.bool,
        onChange: PropTypes.func,
        asterisk: PropTypes.bool
    }

    state = {
        error: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value || nextState.error !== this.state.error;
    }

    handleChange = (field, value) => {
        const { error } = this.state;
        const { onChange } = this.props;
        if (onChange) {
            onChange(field, value);
        }
        if (error) {
            this.triggerError(false);
        }
    }

    handleBlur = value => {
        if (!value) {
            this.triggerError(true);
        }
    }

    triggerError = error => {
        this.setState({ error });
    }

    render() {
        const { error } = this.state,
            {
                name,                                   //输入框前名称
                field,
                placeholder,                            //输入框提示信息
                data = [],                              //option选项value来源
                value,                                  //指定当前选中的条目
                dropdownMatchSelectWidth,               //下拉菜单和选择器是否同宽
                style = { width: 229, height: 40 },     //下拉框样式
                asterisk = false                        //是否是必填项
            } = this.props;
        return (
            <div className="inline-block inline-block-select">
                <span className={ asterisk ? "required-asterisk" : ""}>{name}</span>
                <div className="inline-block" style={{
                    margin: 0
                }}>
                    <Select
                        className={error&&asterisk ? 'error' : ''}
                        value={value}
                        placeholder={placeholder}
                        onChange={this.handleChange.bind(this, field)}
                        dropdownMatchSelectWidth={dropdownMatchSelectWidth}
                        style={style}
                        onBlur={this.handleBlur}
                    >
                        {
                            data.map((item, index) => {
                                return <Option key={index} value={item}>{item}</Option>
                            }) 
                        }
                    </Select>
                    {error&&asterisk &&
                        <div className="error-promote" style={{
                            paddingLeft: 0
                        }}>
                            <label className="error">{placeholder}</label>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export class DatePickerComponent extends Component {

    static propTypes = {
        name: PropTypes.string,         //输入框前名称
        field: PropTypes.string,
        value: PropTypes.oneOfType([    //输入框的值
            PropTypes.string,
            PropTypes.number
        ]),
        placeholder: PropTypes.string,  //输入框提示信息
        onChange: PropTypes.func,       //输入框方法
        disabled: PropTypes.bool,       //是否禁用输入框
        className: PropTypes.string,    // 输入框类名
        style: PropTypes.object,        // 输入框内联样式
        asterisk: PropTypes.bool,        //是否是必填项
    }

    state = {
        error: false,
        open: false,
    }
    //弹出日历和关闭日历的回调
    handleOpenChange = open => {
        this.setState({open});
    }

    triggerError = error => {
        this.setState({ error });
    }

        onChange = (field, value) => {
            this.setState({
                [field]: value
            });
        }

    //时间发生变化时的回调
    onDateChange = (value) => {
        const {onChange,field} = this.props;
        if(onChange){
            onChange(field,value);
        }
        if(!value){
            this.triggerError(true);
        }
    }

    render(){
        const {error,open} = this.state,
        {
            name,
            field,
            value,
            placeholder,
            style,
            asterisk = false,
            className = '',
            disabled=false
        } = this.props;
        console.log()
        return(
            <div className="inline-block">
                <span className={ asterisk ? "required-asterisk" : ""}>{name}</span>
                <div className="inline-block" style={{
                    position: 'relative',
                    marginRight: 0
                }}>
                    <DatePicker
                        ref='datepicker'
                        className={error&&asterisk ? 'error' : ''}
                        allowClear
                        placeholder={placeholder}
                        format="YYYY-MM-DD"
                        value={value}
                        style={style}
                        open={open}
                        disabled={disabled}
                        onOpenChange={this.handleOpenChange}
                        onChange={this.onDateChange}
                    />
                    {error&&asterisk &&
                        <div className="error-promote" style={{
                            paddingLeft: 0
                        }}>
                            <label className="error">{placeholder}</label>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
