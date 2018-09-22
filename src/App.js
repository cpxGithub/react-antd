import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from 'src/router';
import AppContent from 'src/views/Content';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={AppContent} />
        </Switch>
      </div>
    );
  }
}

export default App;
