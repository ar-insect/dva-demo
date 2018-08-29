import React, { PureComponent } from 'react'
import DocumentTitle from 'react-document-title'
import { connect } from 'dva'
import { Link, Route, Redirect, Switch } from 'dva/router'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import { Layout } from 'element-react'

// 容器媒体自适应宽度
const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
    },
}

@connect(state => ({}))
export default class BasicLayout extends PureComponent {

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    render() {

        const layout = (
            <div>layout。。。</div>
        )
        return (
            <DocumentTitle title={'sssss'}>
                <ContainerQuery query={query}>
                { params => <div className={classNames(params)}>{layout}</div> }
                </ContainerQuery>
            </DocumentTitle>
        )
    }
}
