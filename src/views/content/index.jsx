import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Login } from 'src/router';
import { Layout } from 'antd';
import routes from 'src/router';
import SiderNav from 'components/common/siderNav';
import HeaderNav from 'components/common/headerNav';
import './index.less'
const { Header, Content } = Layout;

function setRouter(routes) { // 页面路由渲染
  let routeList = []
  routes.forEach(router => {
    if (router.routes) {
      routeList.push(...setRouter(router.routes))
    } else {
      if (router.redirect) { // 重定向路由
        routeList.push(<Redirect exact from='/' to='/index' key='757' />)
      } else {
        routeList.push(<Route path={router.path} component={router.component} key={router.path} />)
      }
    }
  })
  return routeList
}

class AppContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount() {
    if (this.props.location.pathname === '/') this.props.history.push('/login') // 根域名匹配直接跳转到登录页
  }
  render() {
    let conData
    if (this.props.location.pathname === '/login') {
      conData = <Route exact path='/login' component={Login} />
    } else {
      conData = (
        <Layout className="app-layout">
          <Header className="app-header">
            <HeaderNav />
          </Header>
          <Layout>
            <SiderNav />
            <Content className="app-content">
              <Switch>
                {setRouter(routes)}
                {/* 未匹配页面重定向到登录页 */}
                {/* <Redirect to='/login' /> */}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      )
    }
    return (
      <div className="App">
        {conData}
      </div>
    );
  }
}

export default withRouter(AppContent);
