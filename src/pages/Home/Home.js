import React, { useContext } from 'react';
import { UserContext } from '../../App';

import './Home.css';

const Home = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <p>Signin with key: {userContext.stateUser}</p>
    </>
  );
}

export default Home;