import React from 'react';

import './PieForm.css';
import PieChart from './../PieChart/PieChart';


const PieForm = (props) => {
  const details = props.details;

  const renderH1 = (cardDetail) => {
    if (cardDetail["h1"]) {
      return( cardDetail["h1"].map( (p, index) => <h1 key={"h1"+index}>{p}</h1>) );
    }
  }

  const renderH3 = (cardDetail) => {
    if (cardDetail["h3"]) {
      return( cardDetail["h3"].map( (p, index) => <h3 key={"h3"+index}>{p}</h3>) );
    }
  }

  const renderP = (cardDetail) => {
    if (cardDetail["p"]) {
      return( cardDetail["p"].map( (p, index) => <p key={index}>{p}</p>) );
    }
  }

  return(
    <div className="PieForm">      
      <div className="flex">
        <PieChart percentage={details["pieValue"]}/>

        <div className="card" key="card1">
          {renderH1(details["card1"])}
          {renderH3(details["card1"])}
          {renderP(details["card1"])}
        </div>  

        <div className="card" key="card2">
          {renderH1(details["card2"])}
          {renderH3(details["card2"])}
          {renderP(details["card2"])}
        </div>
      </div>
      
    </div>
  );

}

export default PieForm;