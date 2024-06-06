const fetchButton = document.querySelector("#fetchButton");
const todoIdInput = document.querySelector("#todoId");
const todoDetailsDiv = document.querySelector("#todoDetails");

fetchButton.addEventListener("click", () => {
  const todoId = todoIdInput.value;

  // const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
  const apiUrl = `http://localhost:3000/todos/${todoId}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      todoDetailsDiv.innerText = `
        \nTitle: ${data.title}\n
        Completed: ${data.completed ? "True" : "False"}\n
      `;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      todoDetailsDiv.innerText = "Error fetching data.";
    });
});

// const fetchButton = document.querySelector("#fetchButton");
// const todoIdInput = document.querySelector("#todoId");
// const todoDetailsDiv = document.querySelector("#todoDetails");

// fetchButton.addEventListener("click", () => {
//   const todoId = todoIdInput.value;
//   const apiUrl = `http://localhost:3000/todos/${todoId}`;

//   fetch(apiUrl)
//    .then((response) => {
//       if (!response.ok) {
//         throw new Error("Todo not found");
//       }
//       return response.json();
//     })
//    .then((data) => {
//       todoDetailsDiv.innerText = `
//         \nTitle: ${data.title}\n
//         Completed: ${data.completed? "Yes" : "No"}\n
//       `;
//     })
//    .catch((error) => {
//       console.error("Error fetching data:", error);
//       todoDetailsDiv.innerText = "Error fetching data.";
//     });
// });