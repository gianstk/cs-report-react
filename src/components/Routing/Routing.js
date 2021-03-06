import React, { useEffect, useContext } from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

import Home from './../../pages/Home/Home';
import Signin from './../../pages/Signin/Signin';
import Report from './../../pages/Report/Report';
import DebugLog from './../../pages/DebugLog/DebugLog';
import Localisation from '../../pages/Localisation/Localisation';


const Routing = () => {
  const history = useHistory();
  const userContext = useContext(UserContext);
  const dispatchUser = userContext.dispatchUser;

  useEffect(() => {
    const userKey = localStorage.getItem("userKey");
    if (userKey) {
      dispatchUser({type: "USER", payload: userKey});
      return;
    }
    history.push('/signin');
  }, []);

  return (
    <div> 
      <Switch>
        {/* Signin page */}
        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/localisation">
          <Localisation />
        </Route>

        {/* Report page */}
        <Route path="/report">
          <Report/>
        </Route>

        {/* Monitoring Logs page */}
        <Route path="/debugLog">
          <DebugLog/>
        </Route>

        {/* Heom page */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Routing