//* This is a function that can be passed to JSON.stringify() to customize the serialization process.

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

let jsonString = JSON.stringify(meetup, function replacer(key, value) {
  return key == "occupiedBy" ? undefined : value;
});
console.log(jsonString);
// Output: {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}