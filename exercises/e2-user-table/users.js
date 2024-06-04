fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector("#todo-data");

    for (let i = 0; i < Math.min(data.length, 6); i++) {
      const row = document.createElement("tr");

      const cell1 = document.createElement("td");
      cell1.innerText = data[i].id;

      const cell2 = document.createElement("td");
      cell2.innerText = data[i].title;

      const cell3 = document.createElement("td");
      cell3.innerText = data[i].completed ? "Yes" : "No";

      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);

      tableBody.appendChild(row);
    }
  })
  .catch((error) => console.error("Error:", error));