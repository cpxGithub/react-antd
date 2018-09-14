import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Test from './test'

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
        <Link to='/shop/list'>test</Link>
        <hr />
        <div>
          <Route path='/shop/:topicId' component={Test} />
        </div>
      </div>
    )
  }
}

export default AppIndex;
