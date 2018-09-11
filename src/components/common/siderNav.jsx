import React, { Component } from 'react';
import routes from 'src/router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

function siderHandle(routes, parent) {
  let siderList = routes.map((item, idx) => {
    if (item.routes) {
      let subList = siderHandle(item.routes, item)
      if (parent) {
        return (
          <SubMenu key={item.path} title={<span>{item.meta.title}</span>}>
            {subList}
          </SubMenu>
        )
      } else {
        return (
          <SubMenu key={item.path} title={<span><Icon type={item.icon} /><span>{item.meta.title}</span></span>}>
            {subList}
          </SubMenu>
        )
      }

    } else {
      if (parent) {
        return <Menu.Item key={item.path}>{item.meta.title}</Menu.Item>
      } else {
        return <Menu.Item key={item.path}><Icon type={item.icon} /><span>{item.meta.title}</span></Menu.Item>
      }
    }
  })
  return siderList
}

class SiderNav extends Component {
  // handleClick = (e) => {
  //   console.log(e)
  // }
  render() {
    return (
      <Menu
        // onClick={this.handleClick}
        defaultSelectedKeys={['/index']}
        mode="inline"
      >
        {siderHandle(routes)}
      </Menu>
    )
  }
}

export default SiderNav
