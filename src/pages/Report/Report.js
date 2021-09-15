import React, { useEffect, useState } from 'react';
import './Report.css';

// importing components
import ReportSearch from './../../components/ReportSearch/ReportSearch';
import PieForm from './../../components/PieForm/PieForm';
import Table from './../../components/Table/Table';

// importing javascript logics and models
import staticReportData from './ReportData';
import tableMetadata from './ReportTableHeader';
import DataExtractor from './ReportDataExtractor';

const Report = () => {
  
  const [reportData, setReportData] = useState(null);
  const [devices, setDevices] = useState(null);
  const [fitChecks, setFitChecks] = useState(null);
  const [dailyChecks, setDailyChecks] = useState(null);

  const [recentChecks, setRecentChecks] = useState(null);
  const [summary1, setSummary1] = useState({});
  const [summary2, setSummary2] = useState({});
  const [summary3, setSummary3] = useState({});
  
    
  useEffect(() => {
    if (!reportData) {
      return;
    }
    if (reportData.details) {
      // table data initialisation
      setDevices(reportData.details.dev_entries);
      setFitChecks(reportData.details.fit_check_entries);
      setDailyChecks(reportData.details.daily_check_entries);
      setRecentChecks(reportData.details.dev_entries);
      // PieForm data processing
      setSummary1(DataExtractor.getDeviceSummary(reportData.details));
      setSummary2(DataExtractor.getFitCheckSummary(reportData.details, staticReportData.data2));
      setSummary3(DataExtractor.getDailyCheckSummary(reportData.details, staticReportData.data3));
    }
  }, [reportData])


  // GET request to fetch report
  const getReport = (orgId) => {
    const userKey = localStorage.getItem("userKey");
    const REPORT_ENDPOINT = "https://beta.cleanspace.technology/api/v2/analytics/organisation_monthly_report?id=" + String(orgId);
    fetch(REPORT_ENDPOINT, {
      headers: {
        'Authorization': 'Basic ' + userKey,
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      if (!res.ok) {
        return;
      }
      return res.json();
    }).then((resJson) => {
      if (resJson.organisation && resJson.details) {
        setReportData(resJson);
      }
    }).catch((error) => {
      console.log(error);
    })
  }




  return (
    <div className="Report">
      <ReportSearch getReport={getReport}/>

      {
        devices
        ? <div>
        <h1 className="reportTitle">{staticReportData.title}</h1>
        <PieForm details={summary1}/>
        <PieForm details={summary2}/>
        <PieForm details={summary3}/>
        
        <div className="pagebreak"> </div>
        {<Table key={"table1"} data={devices} tableMetadata={tableMetadata.deviceTable}/>}

        <div className="pagebreak"> </div>
        {<Table key={"table2"} data={fitChecks} tableMetadata={tableMetadata.fitCheckTable}/>}
        
        <div className="pagebreak"> </div>
        {<Table key={"table3"} data={dailyChecks} tableMetadata={tableMetadata.dailyCheckTable}/>}
        
      </div>
        : <div></div>
      }

      
    </div>
  );
}


export default Report;