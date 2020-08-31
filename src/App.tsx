import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Navigation } from './components/Navigation/Navigation';
import { EnterForm } from './components/EnterForm';
import { RegisterForm } from './components/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { setRegisteredUser } from './store/registeredUser';
import { setAuthorization } from './store/autorizes';
import { getAuthorization } from './store/index';
import { LeftNav } from './components/Navigation/LeftNav'
import { First } from './components/Pages/First';
import { Second } from './components/Pages/Second';
import { Third } from './components/Pages/Third';


function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector(getAuthorization);
  useEffect(() => {
    const name = localStorage.getItem('user');
    if (name) {
      dispatch(setRegisteredUser(name));
      dispatch(setAuthorization(true));
    }
  });

  return (
      <div className="App">
        <Navigation />
        {
          isLogged && <LeftNav />
        }
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/home"><Redirect to="/" /></Route>
          <Route path="/page1" exact component={First} />
          <Route path="/page2" exact component={Second} />
          <Route path="/page3" exact component={Third} />
          <Route path="/enter" exact component={EnterForm} />
          <Route path="/register" exact component={RegisterForm} />
        </Switch>
      </div>
  );
}

export default App;