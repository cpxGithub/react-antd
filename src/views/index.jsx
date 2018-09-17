import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AppIndex extends Component {
  render() {
    return (
      <div>
        <div>首页</div>
        <Link to='/shop/list'>test---{this.props.match.params.ids}</Link>
        <hr />
      </div>
    )
  }
}

export default AppIndex;
