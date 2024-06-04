"use strict";

let job = {
  title: "Web Designer",
  startDate: "October 2022",
  company: "AT&T",
  minSalary: 52000,
  maxSalary: 86000,
};

// let jobAsString = JSON.stringify(job);
let jobAsString = JSON.stringify(job, null, 2);
console.log(`${jobAsString}`);
