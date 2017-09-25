import React, {Component} from 'react';

import {Table} from 'antd';

import LoadingComponent from 'components/loading';
import BarChartComponent from './bar-chart';

import columns from 'data/table-columns/defaulter-table';

export default class CreditInvestgation extends Component {

    state = {
        isSuit: true
    }
    
    render() {
        const {isSuit} = this.state;
        return (
            <div className="credit-investgation clerk-tab-container">
                <div className="inverst-field">
                    <div className="inverst-item inline-block box-border">
                        <div className="top-title">
                            身份证核查
                            <span className="pull-right" style={{color: "#48df81"}}>信息源自中国公安部</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "27px 0 0 49px"
                        }}>
                            <div className="inline-block">
                                <img src={`/static/images/manager/clerk/${isSuit ? `gou` : `cha`}.png`} alt="勾差" style={{height: 44}}/>
                            </div>
                            <div className="info-right inline-block">
                                <ul>
                                    <li className="list-item">
                                        <span style={{fontSize: 20}}>刘德华</span>
                                        <span>河南省-郑州市</span>
                                        <span>男</span>
                                    </li>
                                    <li className="list-item">
                                        <span>411721199305177744</span>
                                        <span>1993-05-17</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img   className="consquence"
                               src={`/static/images/manager/clerk/${isSuit ? `pipei.png` : `bupipei.png`}`
                               } alt="匹配"/>
                    </div>
                    <div className="inverst-item inline-block box-border">
                        <div className="top-title">
                            身份证核查
                            <span className="pull-right" style={{color: "#c25255"}}>信息源自运营商</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "27px 0 0 49px"
                        }}>
                            <div className="inline-block">
                                <img src={`/static/images/manager/clerk/${!isSuit ? `gou` : `cha`}.png`} 
                                    alt="勾差"
                                    style={{height: 44}}/>
                            </div>
                            <div className="info-right inline-block">
                                <ul>
                                    <li className="list-item">
                                        <span style={{fontSize: 20}}>138824573271</span>
                                        <span>移动号码</span>
                                    </li>
                                    <li className="list-item">
                                        <span>刘德华</span>
                                        <span>所在地-河北省</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img   className="consquence"
                               src={`/static/images/manager/clerk/${!isSuit ? `pipei.png` : `bupipei.png`}`
                               } alt="匹配"/>
                    </div>
                </div>
                <div className="inverst-field">
                    <div className="inverst-item">
                        <div className="top-title">
                            学历信息核查
                            <span className="pull-right">数据源自学信网</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "27px 0 0 49px"
                        }}>
                            <div>
                                <div className="inline-block info-bar">
                                    <span>毕业证书编号 : </span>
                                    <span>201198000052393</span>
                                </div>
                                <div className="inline-block info-bar">
                                    <span>专业 : </span>
                                    <span>汉语言文学</span>
                                </div>
                                <div className="inline-block info-bar">
                                    <span>院校地址 : </span>
                                    <span>上海市杨浦区邯郸路220号</span>
                                </div>
                            </div>
                            <div style={{marginTop: 26, position: "relative"}}>
                                <div className="inline-block">
                                    <div className="inline-block">
                                        <img src="/static/images/manager/clerk/logo.png" alt="学校logo" style={{width: 120, height: 120}}/>
                                    </div>
                                    <div className="inline-block remark">
                                        <ul>
                                            <li>
                                                <i className="inline-block" style={{
                                                    backgroundColor: "#ff0000"
                                                }}></i>
                                                <span>本科</span>
                                            </li>
                                            <li>
                                                <i className="inline-block" style={{
                                                    backgroundColor: "#517fa0"
                                                }}></i>
                                                <span>985、211大学</span>
                                            </li>
                                            <li>
                                                <i className="inline-block" style={{
                                                    backgroundColor: "#61aa61"
                                                }}></i>
                                                <span>全国热度排名 : </span>
                                                <span>13</span>
                                            </li>
                                            <li>
                                                <i className="inline-block" style={{
                                                    backgroundColor: "#efcb5b"
                                                }}></i>
                                                <span>学校人气值 : </span>
                                                <span>10401185</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="duration inline-block" style={{
                                    position: "absolute",
                                    top: 10,
                                    left: 410
                                }}>
                                    <div className="inline-block">
                                        <ul>
                                            <li>
                                                <span>开始时间</span>
                                            </li>
                                            <li>
                                                <span>2012/09/01</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="inline-block"style={{textAlign: "center", margin: "0 20px"}}>
                                        <h3 style={{marginBottom: 15}}>上海复旦大学</h3>
                                        <img src="/static/images/manager/clerk/time.png" alt="time"
                                             style={{
                                                 width: 136,
                                                 height: 70
                                             }}
                                        />
                                    </div>
                                    <div className="inline-block">
                                        <ul>
                                            <li>
                                                <span>毕业时间</span>
                                            </li>
                                            <li>
                                                <span>2016/06/01</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inverst-field">
                    <div className="inverst-item">
                        <div className="top-title">
                            职业证书信息核查
                            <span className="pull-right">数据源自国家人力资源和社会保障部</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "27px 0 0 78px"
                        }}>
                            <ul className="field-list inline-block">
                                <li>
                                    <span>姓名</span>
                                    <span>刘德华</span>
                                </li>
                                <li>
                                    <span>性别</span>
                                    <span>男</span>
                                </li>
                                <li>
                                    <span>文化程度</span>
                                    <span>本科</span>
                                </li>
                                <li>
                                    <span>身份证号</span>
                                    <span>411721199305177744</span>
                                </li>
                                <li>
                                    <span>数据上报单位</span>
                                    <span>卫生部职业技能鉴定指导中心</span>
                                </li>
                            </ul>  
                            <ul className="field-list inline-block" style={{left: 490}}>
                                <li>
                                    <span>职业名称</span>
                                    <span>高级理财师</span>
                                </li>
                                <li>
                                    <span>评定级别</span>
                                    <span>三级/高级技能</span>
                                </li>
                                <li>
                                    <span>评定成绩</span>
                                    <span>合格</span>
                                </li>
                                <li>
                                    <span>证书编号</span>
                                    <span>15454515421456412</span>
                                </li>
                                <li>
                                    <span>发证日期</span>
                                    <span>2016-04-12</span>
                                </li>
                            </ul>  
                        </div>
                    </div>
                </div>
                <div className="inverst-field">
                    <div className="inverst-item">
                        <div className="top-title">
                            失信被执行信息核查
                            <span className="pull-right">数据源自最高人民法院</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "10px 0 0 8px"
                        }}>
                            
                        </div>
                    </div>
                </div>
                <div className="inverst-field">
                    <div className="inverst-item">
                        <div className="top-title">
                            职业稳定性分析
                            <span className="pull-right">数据源自51金融圈大数据</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "10px 0 0 8px"
                        }}> 
                            <BarChartComponent/>
                            <div className="summary">
                                <div className="inline-block above-all" style={{position: 'relative'}}>
                                    数据有话说
                                </div>
                                <div className="inline-block" style={{backgroundColor: '#fff', width: 1}}></div>
                                <div className="inline-block above-all" style={{width: 787}}>结合求职者提供的工作经验，基于云招聘大数据智能分析进行分析测评，该求职者工作较为稳定。</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inverst-field">
                    <div className="inverst-item">
                        <div className="top-title">
                            网贷黑名单核查
                            <span className="pull-right">网贷黑名单核查</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "10px 0 0 8px"
                        }}>
                            <p className='above-all'>
                            基于51招聘云大数据及网贷黑名单匹配核查，未发现该被调人信息。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="inverst-field">
                    <div className="inverst-item">
                        <div className="top-title">
                            职场信用核查
                            <span className="pull-right">数据来源职场黑名单</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "10px 0 0 8px"
                        }}>
                            <p className='above-all'>
                            基于51招聘云大数据及职场黑名单匹配核查，未发现该被调人信息。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="inverst-field">
                    <div className="inverst-item">
                        <div className="top-title">
                            企业经营核查
                            <span className="pull-right">数据来源中国工商局</span>
                        </div>
                        <div className="superior-content" style={{
                            padding: "10px 0 0 8px"
                        }}>
                            <p className='above-all'>
                            基于51招聘云大数据及工商局信息匹配核查，未发现该被调人企业注册经营信息。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}