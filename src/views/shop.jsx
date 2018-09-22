import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shop extends Component {
  componentDidMount() {
    console.log(123, this)
  }
  render() {
    return (
      <div>
        <div>Shop</div>
        <Link to='/index'>index</Link>
      </div>
    )
  }
}

export default Shop;
