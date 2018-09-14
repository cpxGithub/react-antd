import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Test extends Component {
  render() {
    return (
      <div>
        <div>test</div>
        <Link to='/index'>index---test</Link>
      </div>
    )
  }
}

export default Test;
