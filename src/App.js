import { useReducer, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './Utilities.css';

import { reducer, initState } from './reducers/userReducer';
import Routing from './components/Routing/Routing';
import SideNav from './components/SideNav/SideNav';


export const UserContext = createContext();

function App() {
  const [stateUser, dispatchUser] = useReducer(reducer, initState);


  if (!stateUser) {
    return (
      <div className="App">
        <UserContext.Provider value={{stateUser: stateUser, dispatchUser: dispatchUser}}>
          <Router>
            <Routing/>
          </Router>        
        </UserContext.Provider>
      </div>
    );
  }
  return (
    <div className="App">
      <UserContext.Provider value={{stateUser: stateUser, dispatchUser: dispatchUser}}>
        <Router>

          <Routing/>
        </Router>        
      </UserContext.Provider>
    </div>
  )
  
}

export default App;
