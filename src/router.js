import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'
import { getLayout } from './common/nav'

function RouterConfig({ history, app }) {
  const BasicLayout = getLayout('BasicLayout', app)
  const passProps = { app }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={props => <BasicLayout {...props} {...passProps} />} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
