import React, {Component} from 'react';

import ScrollPageContent from 'components/scroll-page-content';
import BreadCrumbComponent from 'components/breadcrumb';
// 左侧导航栏
import LeftNavComponent from 'components/manager/left-nav';

export default class ManagerPage extends Component {
    
    render() {
        const {location,routes} = this.props,
            pathname = location.pathname,
            patternManager = /\/manager/i; // 匹配manager路径
            console.log(pathname);
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
        );
    }
}