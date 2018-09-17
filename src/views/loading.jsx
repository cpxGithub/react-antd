import React, { Component } from 'react';
import { Spin } from 'antd';


class Loading extends Component {
  render() {
    return (
      <div style={{marginTop: '100px', textAlign: 'center'}}>
        <Spin tip="加载中..." size="large"></Spin>
      </div>
    )
  }
}

export default Loading;