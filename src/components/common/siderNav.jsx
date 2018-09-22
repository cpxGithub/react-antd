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
  rootSubmenuKeys = ['/index11', '/shop'];
  state = {
    openKeys: [], //  SubMenu 菜单项展开项
    selectKeys: [], // 选中的菜单项
    flag: 123
  }
  handleClick = (e) => {
    // console.log(8, e)
  }
  onOpenChange = (openKeys) => {
    console.log(122, openKeys)
    // this.setState({ openKeys });
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  _setMenuKeys(routes, parent) { // 设置侧边导航菜单栏，刷新时展开对应菜单项
    let routerList = routes.find(routerItem => {
      if (routerItem.routes) {
        return this._setMenuKeys(routerItem.routes, routerItem)
      } else {
        if (routerItem.path === this.props.location.pathname) {
          console.log(56, this.props.location.pathname)
          // this.state.selectKeys.clear()
          // this.state.openKeys.clear()
          this.setState({
            selectKeys: [routerItem.path]
          })

          if (parent) {
            this.setState({
              openKeys: [parent.path]
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
        let list = new Set([...prevState.openKeys, rootRouter.path]) // 去重
        return {
          openKeys: [...list]
        }
      })
    } else {
      this.setState({
        selectKeys: ['/index']
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(11, this.props, nextProps)
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        selectKeys: [nextProps.location.pathname]
      })
    }
    // let rootRouter = this._setMenuKeys(routes)
    // if (rootRouter) { // 只渲染在路由列表中的页面
    //   this.setState((prevState) => {
    //     let list = new Set([...prevState.openKeys, rootRouter.path]) // 去重
    //     return {
    //       openKeys: [...list]
    //     }
    //   })
    // } else {
    //   this.setState({
    //     selectKeys: ['/index']
    //   })
    // }
    // this.setState({
    //   selectKeys: ['/index']
    // })
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultOpenKeys={this.state.openKeys}
        defaultSelectedKeys={this.state.selectKeys}
        onOpenChange={this.onOpenChange}
        openKeys={this.state.openKeys}
        selectedKeys={this.state.selectKeys}
        mode="inline"
      >
        {siderHandle(routes)}
      </Menu>
    )
  }
}

export default withRouter(SiderNav)
