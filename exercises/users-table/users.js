// fetch("https://jsonplaceholder.typicode.com/users")
//  .then((response) => response.json())
//  .then((data) => {
//     const tableBody = document.querySelector("#user-data");

//     data.forEach((user) => {
//       const row = document.createElement("tr");

//       const cell1 = row.insertCell();
//       cell1.innerText = user.id;

//       const cell2 = document.createElement("td");
//       cell2.innerText = user.name;

//       const cell3 = document.createElement("td");
//       cell3.innerText = user.username;

//       const cell4 = document.createElement("td")
//       cell4.innerText = user.email;

//       const cell5 = document.createElement("td")
//       cell5.innerText = `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;

//       const cell6 = document.createElement("td")
//       cell6.innerText = user.company.name

//       row.appendChild(cell1);
//       row.appendChild(cell2);
//       row.appendChild(cell3);
//       row.appendChild(cell4);
//       row.appendChild(cell5);
//       row.appendChild(cell6);

//       tableBody.appendChild(row);
//     });
//   })
//  .catch((error) => console.error("Error:", error));

// solution 2
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const tableBody = document.querySelector("#user-data");
    for (const user of users) {
      let row = tableBody.insertRow();

      let cell1 = row.insertCell();
      cell1.innerText = user.name;

      let cell2 = row.insertCell();
      cell2.innerText = user.username;

      let cell3 = row.insertCell();
      cell3.innerText = user.email;

      let cell4 = row.insertCell();
      cell4.innerText = user.phone;

      let cell5 = row.insertCell();
      cell5.innerText = user.website;
      let cell6 = row.insertCell();
      cell6.innerText = user.company.name;
    }
  });
  // .catch((error) => console.error("Error:", error));