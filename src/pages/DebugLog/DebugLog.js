import React, {
  useState,
  useEffect,
} from 'react';
import './DebugLog.css';

import Table from '../../components/Table/Table';
import tableMetadata from './DebugLogTableHeader';

import { Spinner } from 'react-activity';
import 'react-activity/dist/Spinner.css';

const BASE_URL = "https://delhi-mentor-lite-wesley.trycloudflare.com/";


const DebugLog = () => {
  const [logData, setLogData] = useState(null);
  const [ready, setReady] = useState(false);
  const [isSpinner, setSpinner] = useState(false);
  
  useEffect(() => {
    if (!logData) {
      return;
    } 
    setReady(true);
    // getLogData();
    // setTimeout(() => setSpinner(true), 2000);
  }, [logData]);

  // fetch log data
  const getLogData = () => {
    setSpinner(true);
    const DEBUG_LOG_URL = BASE_URL + "allMonitoringLog";
    fetch(DEBUG_LOG_URL, {
      headers: {'Content-Type': 'application/json'}
    }).then((res) => {
      setSpinner(false);
      if (!res.ok) {
        return;
      }
      return res.json();
    }).then((resJson) => {
      if (resJson.data) {
        setLogData(resJson.data);
      }
    }).catch((error) => {
      console.log(error);
    })    
  }
  
  return(
    <div className="DebugLog">
      <button onClick={getLogData}>Get Data</button>

      {
        isSpinner 
        ? <div className="spinnerForm flex">
          <h1>Fetching Logs...</h1>
          <Spinner color="#0a9995" size={32} speed={1} animating={true}/> 
        </div>
        : null
      }
      { ready ? <Table key={"monitoringLog"} data={logData} tableMetadata={tableMetadata.monitoringLog} /> : null }

      

    </div>
  );



}

export default DebugLog;