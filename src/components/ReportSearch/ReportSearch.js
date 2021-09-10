import { useState } from 'react';
import { FaRegHospital } from 'react-icons/fa';

import './ReportSearch.css';

const ReportSearch = () => {
  const [org, setOrg] = useState("");
  const [month, setMonth] = useState("");

  const getReport = () => {
    if (!org || !month) {
      alert("Please choose organisation and date");
      return;
    }

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
              <option value="SKH">SKH</option>
              <option value="SSTH">SSTH</option>
            </select>
          </div>
          
          <div class="flex childGroup">
            <p>Date</p>
            <input className="report-child" type="month" name="" id="" onChange={(e) => {setMonth(e.target.value)}} />
          </div>
          
          
        </div>
        <button className="childGroup report-search-button primary-bg-color" onClick={getReport}>Search</button>

         
      </div>
    </div>


    

  );
}

export default ReportSearch;