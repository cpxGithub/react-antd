import React, { Component } from 'react';
import echarts from 'echarts';

class LineEchart extends Component {
  myChart = {}
  timer
  componentDidMount() {
    let { elName, xData, yData, title } = this.props
    let series = yData.map(item => {
      return {
        type: 'line',
        name: item.title,
        data: item.data
      }
    })
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector(elName));
    // 绘制图表
    this.myChart.setOption({
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: xData
      },
      yAxis: {},
      series
    });
    window.addEventListener('resize', () => {
      this.myChart.setOption(this.myChart.getOption())
      this.myChart.resize()
    })
  }
  render() {
    return (
      <span></span>
    )
  }
}

export default LineEchart;