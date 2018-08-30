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
            return dynamicWrapper(app, [], () => import('../layouts/BasicLayout'))
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
                }
            ],
        }
        
    }

    return null
}

export const getRouteParams = (nav, layout) => {
    if (layout === nav.layout) {
        const clone = {...nav}
        return getPlainNode(clone.children)
    }
}

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
    app,
    models: () => models.map(model => import(`../models/${model}`)),
    component,
})
