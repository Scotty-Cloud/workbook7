//solution 1 .then method
// let fetchButton = document.querySelector("#fetchButton");
// let todoIdInput = document.querySelector("#todoId");
// let todoDetailsDiv = document.querySelector("#todoDetails");

// fetchButton.addEventListener("click", () => {
//   let todoId = todoIdInput.value;

//   // const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
//   let apiUrl = `http://localhost:3000/todos/${todoId}`;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       todoDetailsDiv.innerText = `
//         \nTitle: ${data.title}\n
//         Completed: ${data.completed ? "True" : "False"}\n
//       `;
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       todoDetailsDiv.innerText = "Error fetching data.";
//     });
// });

// solution 2 async await method
let fetchButton = document.querySelector("#fetchButton");
let todoIdInput = document.querySelector("#todoId");
let todoDetailsDiv = document.querySelector("#todoDetails");

fetchButton.addEventListener("click", async () => {
  try {
    let todoId = todoIdInput.value;
    // const apiUrl = `http://localhost:3000/todos/${todoId}`;

    let response = await fetch(`http://localhost:3000/todos/${todoId}`);
    let data = await response.json();

    todoDetailsDiv.innerText = `
      \nTitle: ${data.title}\n
      Completed: ${data.completed? "True" : "False"}\n
    `;
  } catch (error) {
    console.error("Error fetching data:", error);
    todoDetailsDiv.innerText = "Error fetching data.";
  }
});