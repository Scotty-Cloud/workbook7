// solution 1 .then method with createElement table
fetch("https://jsonplaceholder.typicode.com/users")
 .then((response) => response.json())
 .then((data) => {
    let tableBody = document.querySelector("#user-data");

    data.forEach((user) => {
      let row = document.createElement("tr");

      let cell1 = row.insertCell();
      cell1.innerText = user.id;

      let cell2 = document.createElement("td");
      cell2.innerText = user.name;

      let cell3 = document.createElement("td");
      cell3.innerText = user.username;

      let cell4 = document.createElement("td")
      cell4.innerText = user.email;

      let cell5 = document.createElement("td")
      cell5.innerText = `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;

      let cell6 = document.createElement("td")
      cell6.innerText = user.company.name

      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      row.appendChild(cell4);
      row.appendChild(cell5);
      row.appendChild(cell6);

      tableBody.appendChild(row);
    });
  })
 .catch((error) => console.error("Error:", error));
