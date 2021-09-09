import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import './PieChart.css';

const PieChart = (props) => {

  const configData = (percentage) => {
    return {
      datasets: [
        {
          label: '# of Votes',
          data: [percentage, 1-percentage],
          backgroundColor: [
            '#0a9995',
            'rgba(0, 0, 0, 0.1)',
          ],
          options: {
            percentageInnerCutout: 100
          }
        },
      ],
    };
  }

  return(
    <div className="piechart">
      <Doughnut 
        data={configData(props.percentage)}
        options={{cutout: 55}}
      />
    </div>
  );
}

export default PieChart;