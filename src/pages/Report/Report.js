import React from 'react';
import './Report.css';
import reportData from './ReportData';

import PieForm from './../../components/PieForm/PieForm';
import Table from './../../components/Table/Table';

const Report = () => {
  console.log(reportData.title);

  return (
    <div className="Report">
      <h1 className="reportTitle">{reportData.title}</h1>
      <PieForm details={reportData.diagramDetail1}/>
      <PieForm details={reportData.diagramDetail2}/>
      <PieForm details={reportData.diagramDetail3}/>
      
      <div className="pagebreak"> </div>
      <Table title={reportData.title1} data={reportData.data1}/>

      <div className="pagebreak"> </div>
      <Table title={reportData.title2} data={reportData.data2}/>

      <div className="pagebreak"> </div>
      <Table title={reportData.title3} data={reportData.data3}/>
    </div>
  );
}


export default Report;