import React, { Component } from 'react';
import routes from 'src/router';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

function siderHandle(routes) {
  let siderList = routes.map(item => {
    if (item.routes) { // 子菜单渲染
      let subList = siderHandle(item.routes, item)
      return (
        <SubMenu key={item.path} title={<span><Icon type={item.icon} /><span>{item.meta.title}</span></span>}>
          {subList}
        </SubMenu>
      )
    } else { // 菜单项渲染
      if (item.hidden) {
        return ''
      } else {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.meta.title}</span>
            </Link>
          </Menu.Item>
        )
      }
    }
  })
  return siderList
}

class SiderNav extends Component {
  state = {
    subOpen: [], //  SubMenu 菜单项展开项
    selectKeys: [], // 选中的菜单项
    flag: false
  }
  handleClick = (e) => {
    // console.log(e)
    // console.log(ab)
  }
  _setMenuKeys(routes, parent) { // 设置侧边导航菜单栏，刷新时展开对应菜单项
    let routerList = routes.find(routerItem => {
      if (routerItem.routes) {
        return this._setMenuKeys(routerItem.routes, routerItem)
      } else {
        if (routerItem.path === this.props.location.pathname) {
          this.setState({
            selectKeys: [routerItem.path]
          })

          if (parent) {
            this.setState({
              subOpen: [parent.path]
            })
          }
          return true
        }
        return false
      }
    })
    return routerList
  }
  componentWillMount() {
    let rootRouter = this._setMenuKeys(routes)
    if (rootRouter) { // 只渲染在路由列表中的页面
      this.setState((prevState) => {
        let list = new Set([...prevState.subOpen, rootRouter.path]) // 去重
        return {
          subOpen: [...list]
        }
      })
    } else {
      this.setState({
        selectKeys: ['/index']
      })
    }
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultOpenKeys={this.state.subOpen}
        defaultSelectedKeys={this.state.selectKeys}
        mode="inline"
      >
        {siderHandle(routes)}
      </Menu>
    )
  }
}

export default withRouter(SiderNav)
