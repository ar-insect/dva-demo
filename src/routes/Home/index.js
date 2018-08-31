import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './index.less'
@connect(state => ({}))//将值混合到props上，在下面的导出对象函数中可以直接将值点出来 @connect(state => ({user:state.user})) 通过this.props.user可以拿到值
export default class Index extends PureComponent {
  
  render() {
    return (
      <div className={styles.normal}>
        首页
      </div>
    )
  }
}

