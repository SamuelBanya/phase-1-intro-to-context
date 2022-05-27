function createEmployeeRecord(employeeArray) {
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

  // console.log("employeeRecord['firstName']: ", employeeRecord["firstName"]);
  // console.log("employeeRecord['familyName']): ", employeeRecord["familyName"]);
  // console.log("employeeRecord['titleName']): ", employeeRecord["titleName"]);
  // console.log("employeeRecord['payPerHour'])", employeeRecord["payPerHour"]);
  // console.log("employeeRecord['timeInEvents'])", employeeRecord["timeInEvents"]);
  // console.log("employeeRecord['timeOutEvents'])", employeeRecord["timeOutEvents"]);

  return employeeRecord;

}

function createEmployeeRecords(employeeRecordsArray) {
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
  // Goal:
  // We need to take in the 'dateStamp' which is a date time stamp
  // We need to use .slice() accordingly on this to get different sections of the time stamp
  // We need to then create a new object to encapsulate the time stamp components
  // We then need to add the object we just created to an array
  console.log("createTimeInEvent() function");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);
  let timeInEvents = [];
  let timeObject = {};
  timeObject["type"] = "TimeIn";
  // Format for date time stamp:
  // ex: YYYY-MM-DD 800
  // First four characters: YYYY --> [0, 3]
  // Next two characters: MM --> [5, 6]
  // Next two characters: DD --> [8, 9]
  // Remaining: Hour --> [11, array.length]
  timeObject["date"] = dateStamp.slice(0, 10);
  timeObject["hour"] = parseInt(dateStamp.slice(11, dateStamp.length));
  timeInEvents.push(timeObject);
  recordObject["timeInEvents"] = timeInEvents;


  console.log("timeObject: ", timeObject);
  console.log("timeInEvents: ", timeInEvents);
  console.log("recordObject: ", recordObject);

  return recordObject;
}

function createTimeOutEvent(recordObject, dateStamp) {
  console.log("createTimeInEvent() function");
  console.log("recordObject: ", recordObject);
  console.log("dateStamp: ", dateStamp);
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

function hoursWorkedOnDate() {

}

createEmployeeRecord(["Gray", "Worm", "Security", 1]);
createEmployeeRecords([["Gray", "Worm", "Security", 1], ["sam", "banya", "support engineer", 35], ["tina", "belcher", "horse whisperer", 25]]);

console.log("New Test: ");
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
]

createEmployeeRecords(dataEmployees);

employeeRecord = ["Byron", "Poodle", "Mascot", 3];
dateTimeStamp = "2014-02-28 1400";
createTimeInEvent(employeeRecord, dateTimeStamp);
createTimeOutEvent(employeeRecord, dateTimeStamp);
