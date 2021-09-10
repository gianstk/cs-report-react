import React, { useState } from 'react';
import './Report.css';
import staticReportData from './ReportData';

import ReportSearch from './../../components/ReportSearch/ReportSearch';
import PieForm from './../../components/PieForm/PieForm';
import Table from './../../components/Table/Table';

const Report = () => {
  const [reportData, setReportData] = useState({});


  return (
    <div className="Report">
      <ReportSearch/>
      <div>
        <h1 className="reportTitle">{staticReportData.title}</h1>
        <PieForm details={staticReportData.diagramDetail1}/>
        <PieForm details={staticReportData.diagramDetail2}/>
        <PieForm details={staticReportData.diagramDetail3}/>
        
        <div className="pagebreak"> </div>
        <Table title={staticReportData.title1} data={staticReportData.data1}/>

        <div className="pagebreak"> </div>
        <Table title={staticReportData.title2} data={staticReportData.data2}/>

        <div className="pagebreak"> </div>
        <Table title={staticReportData.title3} data={staticReportData.data3}/>
      </div>
      
    </div>
  );
}


export default Report;