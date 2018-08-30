import React, { PureComponent } from 'react'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import { Layout } from 'element-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getNavConfig, getRouteParams } from '../common/nav'
import styles from './BasicLayout.less'

@connect(state => ({}))
export default class BasicLayout extends PureComponent {

    UNSAFE_componentWillMount() {
        const { app } = this.props
        // debugger
        const navConfig = getNavConfig(app, 'BasicLayout')
        const routeParams = getRouteParams(navConfig, 'BasicLayout') || []
        this.routeParams = routeParams
    }

    componentWillUnmount() {

    }

    render() {
        const layout = (
            <div className={styles.container}>
                <Layout.Row>
                    <Layout.Col span="24">
                        <Header />
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span="24">
                        <div className={styles.main}>
                            <Switch>
                                {
                                    this.routeParams && 
                                    this.routeParams.map(item => 
                                        <Route 
                                            exact={item.exact}
                                            key={item.path}
                                            path={item.path}
                                            component={item.component}
                                        />
                                    )
                                }
                                <Redirect exact from="/" to="/home" />

                            </Switch>
                        </div>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span="24">
                        <Footer 
                            links={[{
                                title: 'xxxx',
                                href: 'http://www.xikeyun.cn/',
                                blankTarget: true,
                            }]}
                            copyright={
                                <div>
                                    Copyright dssddssd
                                </div>
                            }
                        />
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
        return (
            <DocumentTitle title={'sssss'}>
                {layout}
            </DocumentTitle>
        )
    }
}
