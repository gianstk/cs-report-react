import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
const tableMetadata = {
  deviceTable: {
    title: "Active Halo Usage Summary in the last 28 days",
    headers: ["Asset ID", "Serial Number", "Location", "Days in Use (past 28 days)", "Fit Check Count (past 28 days)", "Last Fit Check Date", "Last Daily Check Date", "Days since Last recorded filter change"],
    keys: {
      "Asset ID": "dev_name",
      "Serial Number": "dev_serial",
      "Location": "dev_location",
      "Days in Use (past 28 days)": "active_day_count",
      "Fit Check Count (past 28 days)": "scope_fit_check_count",
      "Last Fit Check Date": "last_fit_check_str",
      "Last Daily Check Date": "last_daily_check_str",
      "Days since Last recorded filter change": "time_since_last_filter_change"
    }
  },
  fitCheckTable: {
    title: "Fit Check Detail",
    headers: ["Device", "Serial Number", "Wearer ID", "Date", "Fit Check Result"],
    keys: {
      "Device": "dev_name", 
      "Login": "email", 
      "Serial Number": "dev_serial",
      "Wearer ID": "wearer_id", 
      "Date": "timestamp", 
      "Fit Check Result": "fit_check_result"
    },
    specialNote: [
      "**Fit Check Result with status of Poor indicates that there was an issue with the fit of the mask.**",
      "**We recommend having the user check they have donned the mask correctly as per our tutorial in the app.**",
    ],
  },
  dailyCheckTable: {
    title: "Daily Check Result",
    headers: ["Device", "Serial Number", "Wearer ID", "Date", "Equipment Check", "Battery"],
    keys: {
      "Device": "dev_name", 
      "Login": "email",
      "Serial Number": "dev_serial", 
      "Wearer ID": "wearer_id", 
      "Date": "timestamp", 
      "Equipment Check": "equipment_result", 
      "Battery": "battery_result"
    },
    icons: {
      "Equipment Check": { true: <FaCheck/>, false: <FaTimes/> },
      "Battery": { true: <FaCheck/>, false: <FaTimes/> }
    },
    specialNote: [
      "**Equipment Check fail denotes an issue with the halo unit. We recommend checking that there is a filter installed and nothing obstructing it. Further information on filter can be found in the tutorials within the app.**",
      "**Battery fail denotes an issue with the power status of the battery of the halo unit. We recommend checking that the device's battery is fully charged by keeping it docked in between use.**"
    ],
  }
}

export default tableMetadata;