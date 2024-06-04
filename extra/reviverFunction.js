//* This is a function that can be passed to JSON.parse() to customize the deserialization process.

let jsonString = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(jsonString, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(meetup.date.getDate());
// Output: 30