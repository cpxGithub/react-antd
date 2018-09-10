import React, { Component } from 'react';
import { Layout } from 'antd';
import { Menu, Icon, Button } from 'antd';
import './App.less'
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <div className="App">

        <Layout className="app-layout">
          <Header className="app-header">Header</Header>
          <Layout>
            <Sider
              width='240'
              className="app-sider"
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.toggleCollapsed}
            >
              <Menu
                onClick={this.handleClick}
                // style={{ width: 240, paddingRight: 8 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                // inlineCollapsed={this.state.collapsed}
              >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                  <Menu.Item key="13">Option 9</Menu.Item>
                  <Menu.Item key="14">Option 10</Menu.Item>
                  <Menu.Item key="15">Option 11</Menu.Item>
                  <Menu.Item key="16">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                  <Menu.Item key="17">Option 9</Menu.Item>
                  <Menu.Item key="18">Option 10</Menu.Item>
                  <Menu.Item key="19">Option 11</Menu.Item>
                  <Menu.Item key="20">Option 121100000</Menu.Item>
                </SubMenu>
              </Menu>
              <div className="zoom-fix"></div>
            </Sider>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
