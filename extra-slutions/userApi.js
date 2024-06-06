// solution 1 .then method with createElement table
fetch("https://jsonplaceholder.typicode.com/users")
 .then((response) => response.json())
 .then((data) => {
    const tableBody = document.querySelector("#user-data");

    data.forEach((user) => {
      const row = document.createElement("tr");

      const cell1 = row.insertCell();
      cell1.innerText = user.id;

      const cell2 = document.createElement("td");
      cell2.innerText = user.name;

      const cell3 = document.createElement("td");
      cell3.innerText = user.username;

      const cell4 = document.createElement("td")
      cell4.innerText = user.email;

      const cell5 = document.createElement("td")
      cell5.innerText = `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;

      const cell6 = document.createElement("td")
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
