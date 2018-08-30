import React, { PureComponent, createElement } from 'react'
import { connect } from 'dva'
import styles from './index.less'

@connect(state => ({}))
export default class Footer extends PureComponent {

    render() {
        const { links, copyright } = this.props
        // debugger
        return (
            <div className={styles.footer}>
                {copyright}
                
            </div>
        )
    }
}
