import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import './headerNav.less';

const menu = (
  <Menu>
    <Menu.Item>
      <span>修改密码</span>
    </Menu.Item>
    <Menu.Item>
      <span>退出</span>
    </Menu.Item>
  </Menu>
);

class HeaderNav extends Component {
  render() {
    return (
      <div className="header-bar">
        <div>
          <Avatar size="large" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2363597230,699645826&fm=27&gp=0.jpg" />
          <span className="user-name">任我行</span>
        </div>
        <Dropdown overlay={menu}>
          <span className="ant-dropdown-link">
            13632536562 <Icon type="down" />
          </span>
        </Dropdown>
      </div>
      
    )
  }
}

export default HeaderNav;