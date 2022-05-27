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
  }
  return recordObject;
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

function hoursWorkedOnDate(recordObject, dateStamp) {
  console.log("--------------------------------------");
  console.log("hoursWorkedOnDate() function: ");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);
  console.log('typeof(recordObject["timeInEvents"]): ', typeof (recordObject["timeInEvents"]));
  console.log('typeof(recordObject["timeOutEvents"]): ', typeof (recordObject["timeOutEvents"]));

  console.log('recordObject["timeInEvents"][0]["hour"]: ', recordObject["timeInEvents"][0]["hour"]);
  console.log('recordObject["timeOutEvents"][0]["hour"]: ', recordObject["timeOutEvents"][0]["hour"]);

  let timeIn = recordObject["timeInEvents"][0]["hour"];
  let timeOut = recordObject["timeOutEvents"][0]["hour"];
  let timeDifference = (timeOut - timeIn);

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
  console.log("wagesEarnedOnDate() function called");
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

// TODO: Check 'allWagesFor' function and see why its causing the 'learn test' to fail:
function allWagesFor(recordObject) {
  console.log("--------------------------------------");
  console.log("allWagesFor() function called");
  console.log("recordObject: ", recordObject);

  // GOAL:
  // Create a new object for each of the values present
  // Then, use the 'date' parameter for each object to then call the 'wagesEarnedOnDate()' function
  // Aggregate the entire sum of the wages made and return it
  let timeInEventsArrayLength = recordObject["timeInEvents"].length;

  let newRecordObjectsArray = [];

  for (let i = 0; i < timeInEventsArrayLength; i++) {
    console.log("i: ", i);

    let tempTimeInEventsArray = [];
    let tempTimeOutEventsArray = [];

    let tempTimeInEvents = recordObject["timeInEvents"][i];
    let tempTimeOutEvents = recordObject["timeOutEvents"][i];
    let newRecordObject = { ...recordObject };

    tempTimeInEventsArray.push(tempTimeInEvents);
    tempTimeOutEventsArray.push(tempTimeOutEvents);

    newRecordObject["timeInEvents"] = tempTimeInEventsArray;
    newRecordObject["timeOutEvents"] = tempTimeOutEventsArray;

    console.log("newRecordObject: ", newRecordObject);

    newRecordObjectsArray.push(newRecordObject);
  }

  let wageSum = 0;

  console.log("newRecordObjectsArray: ", newRecordObjectsArray);

  newRecordObjectsArray.forEach((object) => {
    console.log("Inside newRecordObjectArray.forEach() loop: ");
    console.log("object: ", object);
    // Use the timeInEvents["date"] key value accordingly:
    console.log('object["timeInEvents"][0]["date"]: ', object["timeInEvents"][0]["date"]);

    let dateStamp = object["timeInEvents"][0]["date"];
    console.log('dateStamp (object["timeInEvents"][0]["date"]): ', dateStamp);

    console.log("wagesEarnedOnDate() function called within allWagesFor() function: ");
    wageSum += wagesEarnedOnDate(object, dateStamp);
  });

  console.log("wageSum: ", wageSum);

  return wageSum;
}

createEmployeeRecord(["Gray", "Worm", "Security", 1]);
createEmployeeRecords([["Gray", "Worm", "Security", 1], ["sam", "banya", "support engineer", 35], ["tina", "belcher", "horse whisperer", 25]]);

console.log("--------------------------------------");
console.log("testFor 'dataEmployees' object: ");
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

let employeeRecord = ["Byron", "Poodle", "Mascot", 3];
let dateTimeStamp = "2014-02-28 1400";
createTimeInEvent(employeeRecord, dateTimeStamp);
createTimeOutEvent(employeeRecord, dateTimeStamp);

console.log("--------------------------------------");
console.log("Test for 'hoursWorkedOnDateExampleRecord' object: ");
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

// Tests for various functions:
// 'hoursWorkedOnDate()' function:
console.log("--------------------------------------");
console.log("Testing hoursWorkedOnDate() function");
let hoursWorked = hoursWorkedOnDate(hoursWorkedOnDateExampleRecord, dateTimeStamp3);

// 'wagesEarnedOnDate()' function:
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
