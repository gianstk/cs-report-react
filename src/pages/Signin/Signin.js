import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Signin.css';


const Signin = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    if (username && password) {
      const encodedString = new Buffer(username + ":" + password).toString('base64');

      fetch('https://dev1.cleanspace.technology/api/v2/analytics/organisation_monthly_report?id=1', {
        method: 'get',
        headers: {
          'Authorization': 'Basic ' + encodedString,
          'Content-Type': 'application/json',
        },
      }).then(res => {
        if (!res.ok) {
          window.alert("Username or password is incorrect!");
          return;
        }
        localStorage.setItem('userKey', encodedString);
        history.push('/');
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      })
      return;
    }

    alert("Please enter username and password");
  }

  return(
    <div className="Signin card flex">
      <h2>CleanSpace Smart Report</h2>

      <input 
        type="text" 
        placeholder="Username"
        onChange={(e) => {setUsername(e.target.value)}}
      />

      <input 
        type="password" 
        placeholder="password"
        onChange={(e) => {setPassword(e.target.value)}}
      />

      <button className="primary-bg-color" onClick={() => {handleSignin()}}>
        Signin
      </button>
    </div>
  );
}

export default Signin;