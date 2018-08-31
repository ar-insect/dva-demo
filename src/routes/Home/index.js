import React from 'react'
import { connect } from 'dva'
import styles from './index.less'
import images from '../../common/images'

function Index() {
  return (
    <div className={styles.normal}>
      首页
      <img src={images.logo} />
    </div>
  )
}

export default connect()(Index)
