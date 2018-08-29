/**
 * @author ar.insect
 * @description here is the dynamic routing module configured by react
 */
import dynamic from 'dva/dynamic'

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

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
    app,
    models: () => models.map(model => import(`../models/${model}`)),
    component,
})
