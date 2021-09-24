import React, { useContext } from 'react';

import { UserContext } from '../../App';

import './Home.css';

import { render } from 'react-dom';


const Home = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="Home">
      <p>Signin with key: {userContext.stateUser}</p>
      <p>{localStorage.getItem("userKey")}</p>
      
    </div>
  );
}

export default Home;