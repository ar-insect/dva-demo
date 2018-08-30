import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import DocumentTitle from 'react-document-title'
import { Layout } from 'element-react'
import { getNavConfig, getRouteParams } from '../common/nav'
import styles from './UserLayout.less'
// import logo from '../assets/xxxx.png'

@connect(state => ({}))
export default class UserLayout extends PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
  }

  getChildContext() {
    const { location } = this.props
    return { location }
  }

  render() {
    const { location, app } = this.props
    const { pathname } = location
    let title = '用户中心'
    debugger
    const navConfig = getNavConfig(app, 'UserLayout')
    const routeParams = getRouteParams(navConfig,'UserLayout') || []
    const getPageTitle = () => {
        routeParams.forEach((item) => {
            if (item.path === pathname) {
                title = `${item.name}`
            }
        })
        return title
    }
    return (
      <DocumentTitle title={getPageTitle()}>
        <div className={styles.container}>
          
          <div className={styles.main}>
          sdfsdfsdfsdf
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
            </Switch>
          </div>

        </div>
      </DocumentTitle>
    )
  }
}
