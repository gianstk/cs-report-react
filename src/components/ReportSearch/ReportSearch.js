import { useState } from 'react';

import './ReportSearch.css';


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
              {/* <option value="11">SG SengKang Hospital SKH</option> */}
              <option value="5">Alpha Team</option>
              {/* <option value="19">Moraine</option> */}
              {/* <option value="1">SKH</option>
              <option value="2">SSTH</option> */}

              <option value="41">Caboolture ED</option>
              <option value="19">Moraine</option>
              <option value="46">TTSH Singapore</option>
              <option value="11">SG SengKang Hospital SKH</option>
              <option value="133">US University of Vermont Medical Center</option>
              <option value="375">JP Jikei-kai Medical University  Hospital</option>
              <option value="349">JP Iritani Dental Office</option>
              <option value="177">US Kaiser Permanente</option>
            </select>
          </div>
          
          {/* <div className="flex childGroup">
            <p>Date</p>
            <input className="report-child" type="month" name="" id="" onChange={(e) => {setMonth(e.target.value)}} />
          </div> */}
          
          
        </div>
        <button className="childGroup report-search-button primary-bg-color" onClick={getReport}>Search</button>
        
        


         
      </div>
    </div>


    

  );
}

export default ReportSearch;