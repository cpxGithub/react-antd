import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class AppIndex extends Component {
  componentDidMount() {
    setTimeout(() => {
      // this.props.history.push('/shop/list2')
    }, 3000)
  }
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
