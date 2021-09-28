import { useState } from 'react';

import './ReportSearch.css';
import Organisation from './organisations';
import Organisations from './organisations';


const ReportSearch = (props) => {

  const [org, setOrg] = useState("");
  // const [month, setMonth] = useState("");

  const getReport = () => {
    // if (!org || !month) {
      if (!org) {
      alert("Please choose organisation and date");
      return;
    }
    props.getReport(org);
  }


  return(
    <div className="reportParentContainer">
      <div className="ReportSearch card">

        <h1 className="">Choose report details</h1>  
        <div className="flex itemGroup">
          <div className="flex childGroup">
            <p>Organisation</p>
            <select className="report-child" name="orgs" id="org-select" onChange={(e) => {setOrg(e.target.value)}}>
              <option value="">Choose an organisation</option>
              {Organisations.map((org, index) => {
                return <option key={index} value={org.id}>{org.name}</option>
              })}
            </select>
          </div>
          
        </div>
        <button className="childGroup report-search-button primary-bg-color" onClick={getReport}>Search</button>
        
      </div>
    </div>


    

  );
}

export default ReportSearch;