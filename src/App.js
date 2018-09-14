import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import routes from 'src/router';
import SiderNav from 'components/common/siderNav';
import './App.less';
const { Header, Sider, Content } = Layout;

function setRouter(routes) { // 页面路由渲染
  let routeList = []
  routes.map(router => {
    if (router.routes) {
      routeList.push(...setRouter(router.routes))
    } else {
      routeList.push(<Route path={router.path} component={router.component} exact={router.exact} key={router.path} />)
    }
    return router
  })
  return routeList
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  handleClick(e) {
    console.log('click ', e);
  }
  componentDidMount() {
    // console.log(86, this)
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
              <SiderNav />
              <div className="zoom-fix"></div>
            </Sider>
            <Content>
              <Switch>
                {setRouter(routes)}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
