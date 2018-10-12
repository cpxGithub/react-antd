import React, { Component } from 'react';
import LineEchart from 'components/common/lineEchart'
import './index.less'

class AppIndex extends Component {
  state = {
    xData: ['周一','周二','周三','周四','周五','周六','周日'],
    yData: [{
      title: '总量',
      data: [120, 132, 101, 134, 150, 230, 260]
    },
    {
      title: '入库',
      data: [320, 332, 301, 334, 293, 330, 320]
    }]
  }
  componentDidMount() {
    // console.log(this)
  }
  render() {
    let {xData, yData} = this.state
    return (
      <section>
        <div className="data-list">
          <div className="data-list-item">
            <p>总览</p>
            <p>600352</p>
          </div>
          <div className="data-list-item">
            <p>会员登录</p>
            <p>30003</p>
          </div>
          <div className="data-list-item">
            <p>今日数量</p>
            <p>36251</p>
          </div>
        </div>
        <div className="echart-data">
          <div className="data-item total-data">
            <LineEchart
              elName=".total-data"
              xData={xData}
              yData={yData}
            />
          </div>
          <div className="data-item member-data">
            <LineEchart
              elName=".member-data"
              xData={xData}
              yData={yData}
            />
          </div>
          <div className="data-item today-data">
            <LineEchart
              elName=".today-data"
              xData={xData}
              yData={yData}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default AppIndex;
