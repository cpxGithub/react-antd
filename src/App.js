import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from 'src/router';
import AppContent from 'src/views/content/index';
import './App.less';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <div className="App">
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={AppContent} />
          </Switch>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
