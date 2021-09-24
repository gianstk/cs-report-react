import React, { useState, useEffect } from 'react';

import './Localisation.css';

import PixelGrid from '../../components/PixelGridSystem/PixelGrid/PixelGrid';


const Localisation = () => {
  const row = 50;
  const col = 110;
  
  return (
    <div className="Localisation">

      <div className="mainCanvas">
        {/* {isCanvas ? <PixelGrid x={col} y={row} /> : <div></div>} */}
        <PixelGrid x={col} y={row} />
        <img className="screenImage" src="appScreen.png" alt="" height="500px"/>
      </div>
      

    </div>
  ); 
}

export default Localisation;