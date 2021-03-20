import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './App';
import Login from './Login';
import Stats from './Stats';
import Tos from './TOS';
import Privacy from './Privacy';
import Contact from './Contact';
import Profile from './Profile';
import Market from './Market';
import Logout from './Logout';
import './index.css';

function MainApp() {
  document.title = 'ElonCoin'
  console.log(`%c Stop! %cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature or "hack" someones account. It is a scam and will give them access to your account.%cSee http://${window.location.hostname}/selfxss for more information.`, 'font-weight:bold;font-size:50px;color:red;', 'font-weight:normal;font-size:12px;color:lightblue;', 'font-weight:normal;font-size:12px;color:lightblue;');
  return (
    <div className='App'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/stats' component={Stats} />
          <Route exact path='/tos' component={Tos} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/market' component={Market} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>,
  rootElement
);
