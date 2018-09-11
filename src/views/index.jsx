import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Test from './test'

class AppIndex extends Component {
  render() {
    return (
      <div>
        <div>首页</div>
        <Link to='/test'>test</Link>
        <hr />
        <div>
          <Route path='/test/:topicId' component={Test} />
        </div>
      </div>
    )
  }
}

export default AppIndex;
