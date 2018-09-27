import React, { Component } from 'react';
import './index.less'

class AppIndex extends Component {
  componentDidMount() {
    // console.log(this)
  }
  render() {
    return (
      <section>
        <div className="data-list">
          <div className="data-list-item">
            <p>总览</p>
            <p>300</p>
          </div>
          <div className="data-list-item"></div>
          <div className="data-list-item"></div>
        </div>
      </section>
    )
  }
}

export default AppIndex;
