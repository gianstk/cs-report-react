import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';



// process data for chart & card for 1st page of the report
function calculateLocationList(devices) {
  var locationCount = {}
  for (var i = 0; i < devices.length; i++) {
    let location = devices[i].dev_location === ""? "Unknown" : devices[i].dev_location;
    if (!locationCount[location]) {
      locationCount[location] = 1
      continue;
    } else {
      locationCount[location] = locationCount[location] + 1
    } 
  }
  var result = [];
  for (const key in locationCount) {
    result.push(`${key} : ${locationCount[key]}`)
  }
  return result;
}


function calculateFitResultSummary(fitChecks) {
  var fitCheckResults = {}
  var fitCheckTotal = 0
  for (var i = 0; i < fitChecks.length; i++) {
    // let result = calculateFitResult(fitChecks[i].fit_check_result);
    let result = fitChecks[i].fit_check_result;
    fitCheckTotal += 1;
    if (!fitCheckResults[result]) {
      fitCheckResults[result] = 1
      continue;
    }
    fitCheckResults[result] = fitCheckResults[result] + 1
    
  }
  var result = [];
  for (const key in fitCheckResults) {
    result.push(`${key} : ${(fitCheckResults[key] / fitCheckTotal * 100).toFixed(2)}%`);
  }
  return result;
}


function calculateFitResult(fitScore) {
  /*
  (infinite, 2000)  -> Good Fit
  [2000, 500)       -> Adjust and Repeat
  [500, 0)          -> Poor Fit
  [0, infinite)     -> Try Again
  */
  if (fitScore > 2000) {
    return "Good Fit";
  }
  if (fitScore > 500) {
    return "Adjust and Repeat";
  }
  if (fitScore > 0) {
    return "Poor Fit";
  }
  return "Try Again";
}


function calculateDailyCheckSummary(dailyChecks) {
  console.log("daily check:", dailyChecks);

  var failedDailyChecks = {
    equipment: 0,
    battery: 0,
  };
  var dailyCheckTotal = 0;
  for (var i = 0; i < dailyChecks.length; i++) {
    if (dailyChecks[i].equipment_result === false) {
      failedDailyChecks.equipment += 1;  
    }
    if (dailyChecks[i].battery_result === false) {
      failedDailyChecks.battery += 1;  
    }
    dailyCheckTotal += 1;
  }

  return [
    `${(failedDailyChecks.equipment/dailyCheckTotal*100).toFixed(1)}% failed Equipment check`,
    `${(failedDailyChecks.battery/dailyCheckTotal*100).toFixed(1)}% failed Battery check`,
    `After Daily Check`
  ];
}


function convertBooleanToCheckCrossIcon(status) {
  if (status) {
    return <FaCheck className="tableIcon"/>;
  }
  return <FaTimes className="tableIcon"/>;
}

function sortByDateString(arr, key) {
  return arr.sort(function(a, b) {
    var x = Date.parse(a[key]) ? Date.parse(a[key]) : 0;
    var y = Date.parse(b[key]) ? Date.parse(b[key]) : 0;
    return ((x < y) ? 1 : ((x>y) ? -1 : 0));
  });
}

function sortByFitCheckResult(arr) {
  return arr.sort(function(a, b) {
    var x = a["fit_check_result"];
    var y = b["fit_check_result"];
    // return ((x > y) ? 1 : ((x<y) ? -1 : 0));
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  });
}


// ----------------------------------------------
// Main exported functions
// ----------------------------------------------

function getDeviceSummary(details) {
  const connectedDevice = details.recent_checks.connected_devs;
  const totalDevices = details.recent_checks.total_devs;
  const pieValue = connectedDevice/totalDevices;
  const locationList = calculateLocationList(details.dev_entries);

  return {
    "pieValue": pieValue,
    "card1": {
      "h1": [connectedDevice],
      "h3": ["CleanSpace Halo connected to CS Smart App"],
      "h3class": {},
      "p": [`(out of ${totalDevices} registered Halo)`, "In the last 30 days"],
    },
    "card2": {
      "h3": connectedDevice === 0 ? ["There is not Connected Device detail"]: ["Location of the connected Halo"],
      "h3class": {},
      "p": locationList,
    }
  }
}


function getFitCheckSummary(scope_fit_check_entries, recent_checks) {
  const fitCheckCount = recent_checks.total_recent_fit_checks;
  const totalConnectedDevice = recent_checks.connected_devs;
  const pieValue = fitCheckCount/totalConnectedDevice;
  const fitCheckResults = calculateFitResultSummary(scope_fit_check_entries);

  return {
    // "pieValue": pieValue,
    "pieValue": 1,
    "card1": {
      "h1": [fitCheckCount],
      "h3": ["Fit Check conducted"],
      "h3class": {},
      "p": ["In the last 28 days"],
    },
    "card2": {
      "h3": fitCheckCount === 0 ? ["There is no Fit Check detail"] : fitCheckResults,
      "h3class": {
        "Try Again": "orange-text",
        "Poor Fit": "red-text",
      },
      "p": ["in the last 28 days"],
    }
  }
}


// function getDailyCheckSummary(details, dailyChecks) {
function getDailyCheckSummary(scope_daily_check_entries, recent_checks) {
  const dailyCheckCount = recent_checks.total_daily_check_summary;
  const totalDailyCheck = recent_checks.connected_devs;
  const pieValue = dailyCheckCount/totalDailyCheck;
  const dailyCheckResults = calculateDailyCheckSummary(scope_daily_check_entries);

  return {
    // "pieValue": pieValue,
    "pieValue": 1,
    "card1": {
      "h1": [dailyCheckCount],
      "h3": ["Number  of Daily Check"],
      "h3class": {},
      "p": ["In the last 28 days"],
    },
    "card2": {
      "h3": dailyCheckCount === 0 ? ["There is no Daily Check detail"] : dailyCheckResults,
      "h3class": {},
      "p": ["In the last 28 days"],
    }
  }
}




function processDevicesArray(devices) {
  var filteredDevices = devices.filter(device => !(device.last_fit_check_str === "" && device.last_daily_check_str === ""));
  return filteredDevices;
}

function processFitCheckArray(fitChecks) {
  // fitChecks = sortByDateString(fitChecks, "timestamp");
  fitChecks = sortByFitCheckResult(fitChecks);

  for (var i = 0; i < fitChecks.length; i++) {
    fitChecks[i].fit_check_result = calculateFitResult(fitChecks[i].fit_check_result);
  }
  return fitChecks;
}

function processDailyCheckArray(dailyChecks) {
  dailyChecks = sortByDateString(dailyChecks, "timestamp");
  for (var i = 0; i < dailyChecks.length; i++) {
    dailyChecks[i].equipment_result = convertBooleanToCheckCrossIcon(dailyChecks[i].equipment_result) 
    dailyChecks[i].battery_result = convertBooleanToCheckCrossIcon(dailyChecks[i].battery_result) 
  }
  return dailyChecks;
}

export default {
  getDeviceSummary: getDeviceSummary,
  getFitCheckSummary: getFitCheckSummary,
  getDailyCheckSummary: getDailyCheckSummary,
  processDevicesArray: processDevicesArray,
  processFitCheckArray: processFitCheckArray,
  processDailyCheckArray: processDailyCheckArray,
  sortByDateString: sortByDateString,
}