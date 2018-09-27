import { Component } from 'react';
import './index.less';

class NoMatch extends Component {
  componentWillMount() {
    this.props.history.push('/login')
  }
}

export default NoMatch;