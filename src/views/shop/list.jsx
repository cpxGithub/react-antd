import React, { Component } from 'react';

class ShopList extends Component {
  componentDidMount() {
    // console.log(10, this)
  }
  linkTo = () => {
    this.props.history.push('/shop/add')
  }
  render() {
    return (
      <div>
        <p>店铺列表</p>
        <div onClick={this.linkTo}>新增</div>
      </div>
    )
  }
}

export default ShopList;
