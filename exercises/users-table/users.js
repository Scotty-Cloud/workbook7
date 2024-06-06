// solution 1 .then method
// fetch("http://localhost:3000/users")
//   .then((response) => response.json())
//   .then((users) => {
//     let tableBody = document.querySelector("#user-data");
//     for (const user of users) {
//       let row = tableBody.insertRow();

//       let cell1 = row.insertCell();
//       cell1.innerText = user.name;

//       let cell2 = row.insertCell();
//       cell2.innerText = user.username;

//       let cell3 = row.insertCell();
//       cell3.innerText = user.email;

//       let cell4 = row.insertCell();
//       cell4.innerText = user.phone;

//       let cell5 = row.insertCell();
//       cell5.innerText = user.website;
//       let cell6 = row.insertCell();
//       cell6.innerText = user.company.name;
//     }
//   })
//   .catch((error) => console.error("Error:", error));


// solution 2 async await method
async function fetchUsers() {
  try {
    let response = await fetch("http://localhost:3000/users");
    let users = await response.json();
    let tableBody = document.querySelector("#user-data");

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
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUsers();