import React, {Component,PropTypes} from 'react';
import { Button} from 'antd'

import ScrollPageContent from 'components/scroll-page-content';
import BreadCrumbComponent from 'components/breadcrumb';
// 左侧导航栏
import LeftNavComponent from 'components/manager/left-nav';

export default class ManagerPage extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount(){
        NProgress.done();
    }

    goHome = () => {
        //NProgress.start();
        this.context.router.push('/');
    }
    
    render() {
        const {location,routes} = this.props,
            pathname = location.pathname,
            patternManager = /\/manager/i; // 匹配manager路径
        return (
            <ScrollPageContent>
                <div className="page-content manager-page">
                    <BreadCrumbComponent routes={routes} />
                    <div className="box-border list-block">
                        <div className="pull-left">
                            {patternManager.test(pathname) && <LeftNavComponent location={location} />}
                        </div>
                        <div className="pull-right">
                            {this.props.children}
                        </div>
                    </div>    
                </div>
            </ScrollPageContent>
            // <div>
            //     <div className="page-content not-found-page">
            //         {/* <div className="opening-img error-img"></div> */}
            //         <div className="error-text">
            //             <p>页面待开发,敬请期待！</p>
            //         </div>
            //         <Button type="primary" onClick={this.goHome}>返回首页</Button>
            //     </div>
            // </div>
        );
    }    
}