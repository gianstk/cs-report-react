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

// 
import { Spinner } from 'react-activity';
import 'react-activity/dist/Spinner.css';

const Report = () => {
  
  const [reportData, setReportData] = useState(null);
  const [devices, setDevices] = useState(null);
  const [fitChecks, setFitChecks] = useState(null);
  const [dailyChecks, setDailyChecks] = useState(null);

  const [summary1, setSummary1] = useState({});
  const [summary2, setSummary2] = useState({});
  const [summary3, setSummary3] = useState({});
  
  const [isSpinner, setSpinner] = useState(false);
    
  useEffect(() => {
    if (!reportData) {
      return;
    }
    if (reportData.details) {
      // clone data
      const recent_checks = JSON.parse(JSON.stringify(reportData.details.recent_checks));
      const fit_check_entries = [...reportData.details.fit_check_entries];
      const daily_check_entries = [...reportData.details.daily_check_entries];
      const dev_entries = DataExtractor.sortByDateString([...reportData.details.dev_entries], "last_fit_check_str");

      // table data initialisation
      setDevices(dev_entries);
      setFitChecks(DataExtractor.processFitCheckArray(fit_check_entries));      
      setDailyChecks(DataExtractor.processDailyCheckArray(daily_check_entries));
      
      // PieForm data processing
      const scope_daily_check_entries = DataExtractor.processDailyCheckArray(reportData.details.scope_daily_check_entries);
      const scope_fit_check_entries = DataExtractor.processFitCheckArray(reportData.details.scope_fit_check_entries);
      setSummary1(DataExtractor.getDeviceSummary(reportData.details));
      setSummary2(DataExtractor.getFitCheckSummary(scope_fit_check_entries, recent_checks));
      setSummary3(DataExtractor.getDailyCheckSummary(scope_daily_check_entries, recent_checks));
    }
  }, [reportData])


  // GET request to fetch report
  const getReport = (orgId) => {
    setSpinner(true);
    const userKey = localStorage.getItem("userKey");
    const REPORT_ENDPOINT = "https://beta.cleanspace.technology/api/v2/analytics/organisation_monthly_report?id=" + String(orgId);
    fetch(REPORT_ENDPOINT, {
      headers: {
        'Authorization': 'Basic ' + userKey,
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      setSpinner(false);
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
        isSpinner 
        ? <div className="spinnerForm flex">
          <h1>Generating report...</h1>
          <Spinner color="#0a9995" size={32} speed={1} animating={true}/> 
        </div>
        

        : null
      }

      {
        devices
        ? <div>
        <h1 className="reportTitle">{staticReportData.title}</h1>
        <PieForm details={summary1} icon={"device"}/>
        <PieForm details={summary2} icon={"fitcheck"}/>
        <PieForm details={summary3} icon={"dailycheck"}/>
        
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