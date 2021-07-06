import React from 'react';
import ReactDOM from 'react-dom';
import 'zarm/dist/zarm.css';
import './index.css';
import Router from './router/Router'
import Home from './page/home/home.jsx';
import PlatformChoice from './page/platformChoice/platformChoice.jsx'

import reportWebVitals from './reportWebVitals';

import { ConfigProvider, Button } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';

import 'lib-flexible'





const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function name(user){
  console.log(4546556)
  return user.firstName + ' ' + user.lastName;
 
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {name(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const userShow = (
  <div>{getGreeting(user)}</div>
)

ReactDOM.render(
  
  <ConfigProvider primaryColor="#0081ff">
  <Router />
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
