import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import './PieChart.css';

// react icons
import { AiOutlineClockCircle, AiOutlineSafety } from 'react-icons/ai';
import { ImConnection } from 'react-icons/im';

const PieChart = (props) => {

  const renderIcon = () => {
    if (!props.icon) {
      return;
    }
    var icon = null;
    switch(props.icon) {
      case "device":
        icon = <ImConnection className="doughnutIcon"/>;
        break;
      case "fitcheck":
        icon = <AiOutlineSafety className="doughnutIcon"/>;
        break;
      case "dailycheck":
        icon = <AiOutlineClockCircle className="doughnutIcon"/>;
        break;
    }
    return icon;
    
  }

  const configData = (percentage) => {
    return {
      datasets: [
        {
          data: [percentage, 1-percentage],
          backgroundColor: [
            '#0a9995',
            'rgba(0, 0, 0, 0.1)',
          ],
          options: {
            percentageInnerCutout: 90
          }
        },
      ],
    };
  }

  return(
    <div className="piechart">
      {renderIcon()}
      {/* <img className="doughnutIcon" src="fitCheckIcon.jpg" alt="" /> */}
      <Doughnut className="doughnut"
        data={configData(props.percentage)}
        options={{cutout: 55}}
      />
      
    </div>
  );
}

export default PieChart;