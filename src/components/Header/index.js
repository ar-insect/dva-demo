import React, { PureComponent, createElement } from 'react'
import { connect } from 'dva'
import styles from './index.less'

@connect(state => ({}))
export default class Header extends PureComponent {

    render() {
        return (
            <div className={styles.header}>
                Header...
            </div>
        )
    }
}
