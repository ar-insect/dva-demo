import React from 'react'
import { connect } from 'dva'
import styles from './index.less'

function Index() {
  return (
    <div className={styles.normal}>
      首页
    </div>
  )
}

Index.propTypes = {
};

export default connect()(Index)
