// process data for chart & card for 1st page of the report

function calculateLocationList(devices) {
  var locationCount = {}
  for (var i = 0; i < devices.length; i++) {
    let location = devices[i].dev_location == ""? "Unknown" : devices[i].dev_location;

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
    let result = calculateFitResult(fitChecks[i].fit_check_result);
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
  console.log(fitCheckResults);
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
  // ["20% requires Equipment check", "0% requires Battery check", "After Daily Check"]
  var failedDailyChecks = {
    equipment: 0,
    battery: 0,
  };

  var dailyCheckTotal = 0;
  for (var i = 0; i < dailyChecks.length; i++) {
    if (dailyChecks[i].equipment_result == false) {
      failedDailyChecks.equipment += 1;  
    }
    if (dailyChecks[i].battery_result == false) {
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
      "h3": ["Halo connected to CS Smart App"],
      "p": [`(out of ${totalDevices} registered Halo)`, "In the last 30 days"],
    },
    "card2": {
      "h3": ["Location of the connected Halo"],
      "p": locationList,
    }
  }
}


function getFitCheckSummary(details) {
  const fitCheckCount = details.recent_checks.total_recent_fit_checks;
  const totalConnectedDevice = details.recent_checks.connected_devs;
  const pieValue = fitCheckCount/totalConnectedDevice;
  const fitCheckResults = calculateFitResultSummary(details.fit_check_entries);
  
  
  return {
    "pieValue": pieValue,
    "card1": {
      "h1": [fitCheckCount],
      "h3": ["Fit Check conducted"],
      "p": ["In the last 30 days"],
    },
    "card2": {
      "h3": fitCheckResults,
      "p": ["in the last 30 days"],
    }
  }
}


// function getDailyCheckSummary(details, dailyChecks) {
function getDailyCheckSummary(details) {
  const dailyCheckCount = details.recent_checks.total_daily_check_summary;
  const totalDailyCheck = details.recent_checks.connected_devs;
  const pieValue = dailyCheckCount/totalDailyCheck;
  const dailyCheckResults = calculateDailyCheckSummary(details.daily_check_entries);
  
  return {
    "pieValue": pieValue,
    "card1": {
      "h1": [10],
      "h3": ["Number  of Daily Check"],
      "p": ["In the last 30 days"],
    },
    "card2": {
      "h3": dailyCheckResults,
      "p": ["In the last 30 days"],
    }
  }
}


export default {
  getDeviceSummary: getDeviceSummary,
  getFitCheckSummary: getFitCheckSummary,
  getDailyCheckSummary: getDailyCheckSummary
}