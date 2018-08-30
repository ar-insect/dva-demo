/**
 * @author ar.insect
 * @description here is the dynamic routing module configured by react
 */
import dynamic from 'dva/dynamic'
import { getPlainNode } from '../utils'
/**
 * @description get the specified layout
 * @param {string} layoutName name
 * @param {*} app 
 * @returns react module
 */
export function getLayout(layoutName, app) {
    switch (layoutName) {
        case 'BasicLayout':
            return dynamicWrapper(
                app, [], () => import('../layouts/BasicLayout')
            )
            break
        case 'UserLayout':
            return dynamicWrapper(
                app, [], () => import('../layouts/UserLayout')
            )
            break
        case 'ManagerLayout':
        // TODO: here is dynamic manager layout
            break
        default: 
            return null
    }
}
/**
 * 
 * @param {*} app 
 * @param {string} layout 
 * @description get navigation object
 */
export const getNavConfig = (app, layout) => {
    
    if ('BasicLayout' === layout) {
        return {
            name: '首页', 
            exact: true,
            path: '/',
            layout: 'BasicLayout',
            component: dynamicWrapper(app, [], () => import('../layouts/BasicLayout')),
            children: [
                {
                    name: '首页',
                    path: 'home',
                    component: dynamicWrapper(app, [], () => import('../routes/Home/index')),
                },
                {
                    name: '交易中心',
                    path: 'transaction',
                    component: dynamicWrapper(app, [], () => import('../routes/Transaction/index')),
                },
            ],
        }
    } else if ('UserLayout' === layout) {
        return {
            name: '用户中心', 
            exact: true,
            path: '/user',
            layout: 'UserLayout',
            component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
            children: [
                {
                    name: '登录',
                    path: 'login',
                    component: dynamicWrapper(app, [], () => import('../routes/User/login')),
                },
                {
                    name: '注册',
                    path: 'register',
                    component: dynamicWrapper(app, [], () => import('../routes/User/register')),
                },
                {
                    name: '忘记密码',
                    path: 'forgetPwd',
                    component: dynamicWrapper(app, [], () => import('../routes/User/forgetPwd')),
                },
            ],
        }
    }

    return null
}

export const getRouteParams = (nav, layout) => {
    if (layout === nav.layout) {
        const clone = {...nav}
        // debugger
        return getPlainNode(clone.children, clone.path)
    }
}

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
    app,
    models: () => models.map(model => import(`../models/${model}`)),
    component,
})
