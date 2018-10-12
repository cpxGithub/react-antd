import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import { LocaleProvider } from 'antd';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import 'moment/locale/zh-cn';

ReactDOM.render((
  <BrowserRouter>
    {/* <LocaleProvider locale={zh_CN}> */}
      <App />
    {/* </LocaleProvider> */}
  </BrowserRouter>),
  document.getElementById('root')
);
registerServiceWorker();
