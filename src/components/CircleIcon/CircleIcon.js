import React from 'react';
import './CircleIcon.css';

// react icons
import { AiOutlineClockCircle, AiOutlineSafety } from 'react-icons/ai';
import { ImConnection } from 'react-icons/im';


const CircleIcon = (props) => {

  const renderIcon = (icon) => {
    if (!props.icon) {
      return;
    }
    var icon = null;
    switch(props.icon) {
      case "device":
        icon = <ImConnection className="icon"/>;
        break;
      case "fitcheck":
        icon = <AiOutlineSafety className="icon"/>;
        break;
      case "dailycheck":
        icon = <AiOutlineClockCircle className="icon"/>;
        break;
    }
    return icon;
  }

  return(
    <div className="circleIcon">
      {renderIcon(props.icon)}
    </div>
  );
}

export default CircleIcon