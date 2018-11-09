import React, { Component } from 'react';
import routes from 'src/router';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;

/**
 * 设置侧边栏
 * @param {Array} routes 路由列表
 */
function siderHandle(routes) {
  let siderList = routes.map(item => {
    if (item.routes) { // 子菜单渲染
      return (
        <SubMenu key={item.path} title={
          <span>
            {item.icon && <Icon type={item.icon} />}
            <span>{item.meta.title}</span>
          </span>
        }>
          {siderHandle(item.routes)}
        </SubMenu>
      )
    } else { // 菜单项渲染
      if (item.hidden) {
        return ''
      } else {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.icon && <Icon type={item.icon} />}
              <span>{item.meta.title}</span>
            </Link>
          </Menu.Item>
        )
      }
    }
  })
  return siderList
}

/* eslint-disable */
/**
 * 测试
 * @param {Array} routes 路由列表
 */
function filterSiderHandle(routes) {
  let siderList = routes.filter(item => {
    if (item.routes) { // 子菜单渲染
      item.routes = filterSiderHandle(item.routes)
      return true
    } else { // 菜单项渲染
      if (item.hidden) {
        return false
      } else {
        return true
      }
    }
  })
  return siderList
}

function filterSiderHandle1(routes) {
  let siderList = routes.reduce((acc, item) => {
    if (item.routes) { // 子菜单渲染
      item.routes = filterSiderHandle1(item.routes)
      acc.push(item)
    } else { // 菜单项渲染
      if (!item.hidden) {
        acc.push(item)
      }
    }
    return acc;
  }, [])
  return siderList
}
/* eslint-enable */

class SiderNav extends Component {
  state = {
    openKeys: [], //  SubMenu 菜单项展开项
    selectKeys: [], // 选中的菜单项
    collapsed: false,
  }
  toggleCollapsed = (collapsed, type) => {
    if (collapsed) {
      this.setState({
        openKeys: []
      })
    }
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  onOpenChange = (openKeys) => {
    this.setState({ openKeys });
  }
  _setMenuKeys() { // 设置侧边导航菜单栏，刷新时展开对应菜单项
    let { location } = this.props
    let pathSnippets = location.pathname.split('/').filter(i => i)
    let openKeys
    switch (pathSnippets.length) {
      case 1: // 一级目录
        break
      case 2: // 二级目录
        openKeys = [`/${pathSnippets[0]}`]
        break
      case 3: // 三级目录
        openKeys = [`/${pathSnippets[0]}`, `/${pathSnippets[0]}/${pathSnippets[1]}`]
        break
      default:
        break
    }
    this.setState({
      openKeys,
      selectKeys: [location.pathname]
    })
  }
  componentWillMount() {
    this._setMenuKeys(routes)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        selectKeys: [nextProps.location.pathname]
      })
    }
  }
  render() {
    return (
      <Sider
        width='240'
        className="app-sider"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.toggleCollapsed}
      >
        <Menu
          defaultOpenKeys={this.state.openKeys}
          // defaultSelectedKeys={this.state.selectKeys}
          onOpenChange={this.onOpenChange}
          openKeys={this.state.openKeys}
          selectedKeys={this.state.selectKeys}
          mode="inline"
        >
          {siderHandle(routes)}
        </Menu>
        <div className="zoom-fix"></div>
      </Sider>
    )
  }
}

export default withRouter(SiderNav);