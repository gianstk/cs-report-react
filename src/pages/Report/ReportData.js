const reportData = {
  "title": "CleanSpace Smart Monthly Report",

  "diagramDetail1": {
    "pieValue": 0.3,
    "card1": {
      "h1": [9],
      "h3": ["Halo connected to CS Smart App"],
      "p": ["(out of 20 registered Halo)", "In the last 30 days"],
    },
    "card2": {
      "h3": ["Location of the connected Halo"],
      "p": ["Covid ward: 1", "OR: 5", "..."],
    }
  },
  "diagramDetail2": {
    "pieValue": 0.6,
    "card1": {
      "h1": [2],
      "h3": ["Fit Check conducted"],
      "p": ["In the last 30 days"],
    },
    "card2": {
      "h3": ["25% Good Fit", "0% Adjust & Repeat", "75% Poor Fit"],
      "p": ["in the last 30 days"],
    }
  },
  
  "diagramDetail3": {
    "pieValue": 0.75,
    "card1": {
      "h1": [10],
      "h3": ["Numbero f Daily Check"],
      "p": ["In the last 30 days"],
    },
    "card2": {
      "h3": ["20% requires Equipment check", "0% requires Battery check", "After Daily Check"],
      "p": ["In the last 30 days"],
    }
  },

  "title1": "Active Halo Usage Summary in the last 30 days",
  "data1": [
    {"Asset ID": "OST CS8", "Serial Number": "G0003341", "Location": "MOT", "Days in Use (past 28 days)": 1, "Fit Check Count (past 28 days)": 5, "Last Fit Check Date": "2021 Aug 03", "Last Daily Check Date": "2021 May 14", "Days since Last recorded filter change": "No Data"},
    {"Asset ID": "OST CS8", "Serial Number": "G0003341", "Location": "MOT", "Days in Use (past 28 days)": 1, "Fit Check Count (past 28 days)": 5, "Last Fit Check Date": "2021 Aug 03", "Last Daily Check Date": "2021 May 14", "Days since Last recorded filter change": "No Data"},
    {"Asset ID": "OST CS8", "Serial Number": "G0003341", "Location": "MOT", "Days in Use (past 28 days)": 1, "Fit Check Count (past 28 days)": 5, "Last Fit Check Date": "2021 Aug 03", "Last Daily Check Date": "2021 May 14", "Days since Last recorded filter change": "No Data"},
    {"Asset ID": "OST CS8", "Serial Number": "G0003341", "Location": "MOT", "Days in Use (past 28 days)": 1, "Fit Check Count (past 28 days)": 5, "Last Fit Check Date": "2021 Aug 03", "Last Daily Check Date": "2021 May 14", "Days since Last recorded filter change": "No Data"},
    {"Asset ID": "OST CS8", "Serial Number": "G0003341", "Location": "MOT", "Days in Use (past 28 days)": 1, "Fit Check Count (past 28 days)": 5, "Last Fit Check Date": "2021 Aug 03", "Last Daily Check Date": "2021 May 14", "Days since Last recorded filter change": "No Data"},
    {"Asset ID": "OST CS8", "Serial Number": "G0003341", "Location": "MOT", "Days in Use (past 28 days)": 1, "Fit Check Count (past 28 days)": 5, "Last Fit Check Date": "2021 Aug 03", "Last Daily Check Date": "2021 May 14", "Days since Last recorded filter change": "No Data"},
  ],

  "title2": "Fit Check Detail",
  "data2": [
    {"Device": "CleanSpace Halo", "Login": "---", "Wearer ID": "T0001", "Date": "2021 Sep 27", "Fit Check Result": "Bad"},
    {"Device": "CleanSpace Halo", "Login": "---", "Wearer ID": "T0001", "Date": "2021 Sep 27", "Fit Check Result": "Adjust"},
    {"Device": "CleanSpace Halo", "Login": "---", "Wearer ID": "T0001", "Date": "2021 Sep 27", "Fit Check Result": "Good"},
  ],

  "title3": "Daily Check Result",
  "data3": [
    {"Device": "---", "Login": "test@test.com", "Wearer ID": "G0001", "Date": "2021 Aug 03", "Equipment Check": "Pass", "Battery": "Fail"},
    {"Device": "---", "Login": "test@test.com", "Wearer ID": "G0001", "Date": "2021 Aug 03", "Equipment Check": "Pass", "Battery": "Fail"},
    {"Device": "---", "Login": "test@test.com", "Wearer ID": "G0001", "Date": "2021 Aug 03", "Equipment Check": "Pass", "Battery": "Fail"},
  ],
}

export default reportData;