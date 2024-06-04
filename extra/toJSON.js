//* This method is used to convert an object to a JSON string.
//* It is called automatically by JSON.stringify().

let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let jsonString = JSON.stringify(room);
console.log(jsonString);
// Output: 23