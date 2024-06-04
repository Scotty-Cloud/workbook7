"use strict";

// Fetch data from the specified URL
fetch("http://jsonplaceholder.typicode.com/users/1")
// Parse the response as JSON
.then((response) => response.json())
//Log the fetched data
.then((data) => console.log.json(data))
// Handle any errors that occur during the process
.catch((error) => console.error("Error:", error));