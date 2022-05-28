// FUNCTIONS:
function createEmployeeRecord(employeeArray) {
  console.log("--------------------------------------");
  console.log("Inside createEmployeeRecord() function");
  console.log("employeeArray: ", employeeArray);
  let firstName = employeeArray[0];
  let familyName = employeeArray[1];
  let titleName = employeeArray[2];
  let payPerHour = employeeArray[3];
  let employeeRecord = {};

  console.log("firstName: ", firstName);
  console.log("familyName: ", familyName);
  console.log("titleName: ", titleName);
  console.log("payPerHour: ", payPerHour);

  let timeInEvents = [];
  let timeOutEvents = [];

  // Create an object from the element variables above
  employeeRecord["firstName"] = firstName;
  employeeRecord["familyName"] = familyName;
  employeeRecord["title"] = titleName;
  employeeRecord["payPerHour"] = payPerHour;
  employeeRecord["timeInEvents"] = timeInEvents;
  employeeRecord["timeOutEvents"] = timeOutEvents;

  return employeeRecord;
}

function createEmployeeRecords(employeeRecordsArray) {
  console.log("--------------------------------------");
  console.log("Inside createEmployeeRecords() function");
  let employeeObjectsArray = [];
  employeeRecordsArray.forEach((record) => {
    console.log("record: ", record);
    let employeeRecord = {};

    console.log("record: ", record);
    employeeRecord["firstName"] = record[0];
    employeeRecord["familyName"] = record[1];
    employeeRecord["title"] = record[2];
    employeeRecord["payPerHour"] = record[3];

    console.log("employeeRecord: ", employeeRecord);

    employeeObjectsArray.push(employeeRecord);
  });

  console.log("employeeObjectsArray: ", employeeObjectsArray);

  console.log("employeeObjectsArray.length: ", employeeObjectsArray.length);

  return employeeObjectsArray;
}

function createTimeInEvent(recordObject, dateStamp) {
  console.log("--------------------------------------");
  console.log("Inside createTimeInEvent() function");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);
  if (recordObject["timeInEvents"]) {
    console.log("timeInEvents array is already present in recordObject");

    let timeInEvents = recordObject["timeInEvents"];
    console.log("timeInEvents array is already present in recordObject");

    let timeObject = {};
    timeObject["type"] = "TimeIn";
    timeObject["date"] = dateStamp.slice(0, 10);
    timeObject["hour"] = parseInt(dateStamp.slice(11, dateStamp.length));
    timeInEvents.push(timeObject);
    recordObject["timeInEvents"] = timeInEvents;

    return recordObject;
  }
  else {
    let timeInEvents = [];
    let timeObject = {};
    timeObject["type"] = "TimeIn";
    timeObject["date"] = dateStamp.slice(0, 10);
    timeObject["hour"] = parseInt(dateStamp.slice(11, dateStamp.length));
    timeInEvents.push(timeObject);
    recordObject["timeInEvents"] = timeInEvents;

    console.log("timeObject: ", timeObject);
    console.log("timeInEvents: ", timeInEvents);
    console.log("recordObject: ", recordObject);

    return recordObject;
  }
}

function createTimeOutEvent(recordObject, dateStamp) {
  console.log("--------------------------------------");
  console.log("Inside createTimeOutEvent() function");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);
  if (recordObject["timeOutEvents"]) {
    let timeOutEvents = recordObject["timeOutEvents"];
    console.log("timeOutEvents array is already present in recordObject");

    let timeObject = {};
    timeObject["type"] = "TimeOut";
    timeObject["date"] = dateStamp.slice(0, 10);
    timeObject["hour"] = parseInt(dateStamp.slice(11, dateStamp.length));
    timeOutEvents.push(timeObject);
    recordObject["timeOutEvents"] = timeOutEvents;

    return recordObject;
  }
  else {
    let timeOutEvents = [];
    let timeObject = {};
    timeObject["type"] = "TimeOut";
    timeObject["date"] = dateStamp.slice(0, 10);
    timeObject["hour"] = parseInt(dateStamp.slice(11, dateStamp.length));
    timeOutEvents.push(timeObject);
    recordObject["timeOutEvents"] = timeOutEvents;

    console.log("timeObject: ", timeObject);
    console.log("timeOutEvents: ", timeOutEvents);
    console.log("recordObject: ", recordObject);

    return recordObject;
  }
}

function filterForTimeInEvents(recordObject, dateStamp) {
  console.log("--------------------------------------");
  console.log("Inside filterForTimeInEvents() function");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);
  let filterForTimeInEventsOutput = recordObject.timeInEvents.find((element) => {
    return element.date === dateStamp;
  });

  console.log("filterForTimeInEventsOutput: ", filterForTimeInEventsOutput);

  if (filterForTimeInEventsOutput) {
    let filteredHour = filterForTimeInEventsOutput["hour"];
    console.log("filteredHour: ", filteredHour);

    return filteredHour;
  }
}

function filterForTimeOutEvents(recordObject, dateStamp) {
  console.log("--------------------------------------");
  console.log("Inside filterForTimeOutEvents() function");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);

  let filterForTimeOutEventsOutput = recordObject.timeOutEvents.find((element) => {
    return element.date === dateStamp;
  });

  console.log("filterForTimeOutEventsOutput: ", filterForTimeOutEventsOutput);

  if (filterForTimeOutEventsOutput) {
    let filteredHour = filterForTimeOutEventsOutput["hour"];
    console.log("filteredHour: ", filteredHour);

    return filteredHour;
  }

}

function hoursWorkedOnDate(recordObject, dateStamp) {
  console.log("--------------------------------------");
  console.log("Inside hoursWorkedOnDate() function");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);
  console.log('typeof(recordObject["timeInEvents"]): ', typeof (recordObject["timeInEvents"]));
  console.log('typeof(recordObject["timeOutEvents"]): ', typeof (recordObject["timeOutEvents"]));

  console.log('recordObject["timeInEvents"][0]["hour"]: ', recordObject["timeInEvents"][0]["hour"]);
  console.log('recordObject["timeOutEvents"][0]["hour"]: ', recordObject["timeOutEvents"][0]["hour"]);

  // TODO:
  // Don't just use the first element
  // Filter for the element that contains the dateStamp:
  // Filter through 'timeInEvents' for the given date:
  let timeInHour = filterForTimeInEvents(recordObject, dateStamp);
  // Filter through 'timeOutEvents' for the given date:
  let timeOutHour = filterForTimeOutEvents(recordObject, dateStamp);

  console.log("timeInHour: ", timeInHour);
  console.log("timeOutHour: ", timeOutHour);

  let timeDifference = (timeOutHour - timeInHour);

  // Convert to a string so that we can rip out trailing zeroes later on to
  // deal with '24 Hour' clock scenario:
  timeDifference = timeDifference.toString();
  console.log("timeDifference.length: ", timeDifference.length);

  if (timeDifference.length > 2) {
    timeDifference = timeDifference.slice(0, timeDifference.length - 2);
  }

  let hoursWorked = parseInt(timeDifference, 10);

  console.log("hoursWorked: ", hoursWorked);

  return hoursWorked;

}

function wagesEarnedOnDate(recordObject, dateStamp) {
  console.log("--------------------------------------");
  console.log("Inside wagesEarnedOnDate() function");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);

  let hoursWorked = hoursWorkedOnDate(recordObject, dateStamp);
  console.log("hoursWorked (from within wagesEarnedOnDate() function): ", hoursWorked);
  let payPerHour = recordObject["payPerHour"];
  console.log("payPerHour: ", payPerHour);
  let wagesEarned = parseInt(hoursWorked * payPerHour, 10);

  console.log("wagesEarned: ", wagesEarned);

  return wagesEarned;
}

function allWagesFor(recordObject) {
  console.log("--------------------------------------");
  console.log("Inside allWagesFor() function");
  console.log("recordObject: ", recordObject);

  // Grab the dates:
  let dateArray = [];
  recordObject["timeInEvents"].forEach((element) => {
    console.log("element: ", element);
    let dateElement = element["date"];
    console.log("dateElement: ", dateElement);
    dateArray.push(dateElement);
  });

  let wageSum = 0;

  console.log("Inside .forEach() loop for 'dateArray': ");
  dateArray.forEach((dateElement) => {
    console.log("dateElement: ", dateElement);
    // Call 'wagesEarnedOnDate()' function:
    let wagesEarned = wagesEarnedOnDate(recordObject, dateElement);
    wageSum += wagesEarned;
  });

  console.log("wageSum: ", wageSum);

  return wageSum;
}

function calculatePayroll(payrollEmployeeRecords) {
  console.log("--------------------------------------");
  console.log("Inside calculatePayroll() function");

  // // Create another variable 'payrollSum' so that we can later add 'employeeWageSum' to it:
  let payrollSum = 0;

  payrollEmployeeRecords.forEach((employee) => {
    console.log("employee: ", employee);
    // Call 'allWagesFor()' function for each employee, and assign the output to the 'employeeWageSum' variable
    let employeeWageSum = allWagesFor(employee);
    console.log("employeeWageSum: ", employeeWageSum);
    payrollSum += employeeWageSum;
  });

  console.log("payrollSum: ", payrollSum);

  return payrollSum;
}

// TESTING SECTION:
// 'createEmployeeRecord()' function:
console.log("--------------------------------------");
console.log("Testing 'createEmployeeRecord' function: ");
createEmployeeRecord(["Gray", "Worm", "Security", 1]);
createEmployeeRecords([["Gray", "Worm", "Security", 1], ["sam", "banya", "support engineer", 35], ["tina", "belcher", "horse whisperer", 25]]);

// 'createEmployeeRecords()' function:
console.log("--------------------------------------");
console.log("Testing 'createEmployeeRecords' function: ");
let dataEmployees = [
  ["Thor", "Odinsson", "Electrical Engineer", 45],
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150],
  ["Darcey", "Lewis", "Intern", 15],
  ["Jarvis", "Stark", "CIO", 125],
  ["Anthony", "Stark", "Angel Investor", 300],
  ["Byron", "Poodle", "Mascot", 3],
  ["Julius", "Caesar", "General", 27],
  ["Rafiki", "", "Aide", 10],
  ["Simba", "", "King", 100]
];

createEmployeeRecords(dataEmployees);

// 'hoursWorkedOnDate()' function:
console.log("--------------------------------------");
console.log("Testing 'hoursWorkedOnDate' function: ");
let employeeRecord = ["Byron", "Poodle", "Mascot", 3];
let dateTimeStamp = "2014-02-28 1400";
createTimeInEvent(employeeRecord, dateTimeStamp);
createTimeOutEvent(employeeRecord, dateTimeStamp);

let employeeRecord2 = ["Maxwell", "Sheffield", "Broadway Produceer", 10];
let dateTimeInStamp2 = "2022-05-27 1500";
let dateTimeOutStamp2 = "2022-05-27 1700";
let hoursWorkedOnDateExampleRecord = createEmployeeRecord(employeeRecord2);
console.log("hoursWorkedOnDateExampleRecord after createEmployeeRecord() function: ", hoursWorkedOnDateExampleRecord);
hoursWorkedOnDateExampleRecord = createTimeInEvent(hoursWorkedOnDateExampleRecord, dateTimeInStamp2);
console.log("hoursWorkedOnDateExampleRecord after createTimeInEvent() function: ", hoursWorkedOnDateExampleRecord);
hoursWorkedOnDateExampleRecord = createTimeOutEvent(hoursWorkedOnDateExampleRecord, dateTimeOutStamp2);
console.log("hoursWorkedOnDateExampleRecord after createTimeOutEvent() function: ", hoursWorkedOnDateExampleRecord);

let dateTimeStamp3 = "2022-05-28";

console.log("--------------------------------------");
console.log("Testing hoursWorkedOnDate() function");
let hoursWorked = hoursWorkedOnDate(hoursWorkedOnDateExampleRecord, dateTimeStamp3);

// 'wagesEarnedOnDate()' function:
console.log("--------------------------------------");
console.log("Testing 'wagesEarnedOnDate' function: ");
let wagesEarnedTestRecord = ["Julius", "Caesar", "General", 27];
let wagesEarnedTimeIn = "0044-03-15 0900";
let wagesEarnedTimeOut = "0044-03-15 1100";
let wagesEarnedDateStamp = "0044-03-15";

wagesEarnedTestRecord = createEmployeeRecord(wagesEarnedTestRecord);
wagesEarnedTestRecord = createTimeInEvent(wagesEarnedTestRecord, wagesEarnedTimeIn);
wagesEarnedTestRecord = createTimeOutEvent(wagesEarnedTestRecord, wagesEarnedTimeOut);
wagesEarnedOnDate(wagesEarnedTestRecord, wagesEarnedDateStamp);

// 'allWagesFor()' function:
console.log("--------------------------------------");
console.log("Testing allWagesFor() function:");
let allWagesForTestRecord = ["Julius", "Caesar", "General", 27];
let allWagesForTimeIn1 = "0044-03-14 0900";
let allWagesForTimeOut1 = "0044-03-14 2100";
let allWagesForTimeIn2 = "0044-03-15 0900";
let allWagesForTimeOut2 = "0044-03-15 1100";

allWagesForTestRecord = createEmployeeRecord(allWagesForTestRecord);
allWagesForTestRecord = createTimeInEvent(allWagesForTestRecord, allWagesForTimeIn1);
allWagesForTestRecord = createTimeOutEvent(allWagesForTestRecord, allWagesForTimeOut1);
allWagesForTestRecord = createTimeInEvent(allWagesForTestRecord, allWagesForTimeIn2);
allWagesForTestRecord = createTimeOutEvent(allWagesForTestRecord, allWagesForTimeOut2);

allWagesFor(allWagesForTestRecord);

// 'calculatePayroll()' function:
console.log("--------------------------------------");
console.log("Testing calculatePayroll() function:");

// Data taken from 'Mocha' test case itself to ensure that embedded arrays could be handled in this scenario:
const csvDataEmployees = [
  ["Thor", "Odinsson", "Electrical Engineer", 45],
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150],
  ["Darcey", "Lewis", "Intern", 15],
  ["Jarvis", "Stark", "CIO", 125],
  ["Anthony", "Stark", "Angel Investor", 300]
];

const csvTimesIn = [
  ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
  ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
  ["Natalia", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1300"]],
  ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
  ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
  ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
];

const csvTimesOut = [
  ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Natalia", ["2018-01-01 2300", "2018-01-02 2300", "2018-01-03 2300"]],
  ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
  ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
];

let payrollEmployeeRecords = createEmployeeRecords(csvDataEmployees);

// Utilizing test case's code to handle the crazy embedded information present:
payrollEmployeeRecords.forEach((employeeRecord) => {
  let timesInRecordRow = csvTimesIn.find((row) => {
    return employeeRecord.firstName === row[0];
  });

  let timesOutRecordRow = csvTimesOut.find((row) => {
    return employeeRecord.firstName === row[0];
  });

  timesInRecordRow[1].forEach((timeInStamp) => {
    createTimeInEvent(employeeRecord, timeInStamp);
  });

  timesOutRecordRow[1].forEach((timeOutStamp) => {
    createTimeOutEvent(employeeRecord, timeOutStamp);
  });
});

// console.log("result: ", result);
console.log("payrollEmployeeRecords: ", payrollEmployeeRecords);

// Provide the array of employee records to 'calculatePayroll()' function:
calculatePayroll(payrollEmployeeRecords);
