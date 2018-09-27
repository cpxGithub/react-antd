import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Login, NoMatch } from 'src/router';
import { Layout } from 'antd';
import routes from 'src/router';
import SiderNav from 'components/common/siderNav';
import HeaderNav from 'components/common/headerNav';
const { Header, Sider, Content } = Layout;

function setRouter(routes) { // 页面路由渲染
  let routeList = []
  routes.map(router => {
    if (router.routes) {
      routeList.push(...setRouter(router.routes))
    } else {
      if (router.redirect) { // 重定向路由
        routeList.push(<Redirect exact from='/' to='/index' key='757' />)
      } else {
        routeList.push(<Route path={router.path} component={router.component} key={router.path} />)
      }
    }
    return router
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
    // console.log(86, this)
  }
  render() {
    // console.log(12, this)
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
            <SiderNav menu={routes} />
            <Content>
              <Switch>
                {setRouter(routes)}
                {/* 根域名重定向到首页 */}
                {/* <Redirect exact from='/' to='/index' /> */}
                {/* 未匹配页面显示404 */}
                {/* <Redirect to='/login' /> */}
                <Route component={NoMatch} />
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
