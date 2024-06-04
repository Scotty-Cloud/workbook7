const fetchButton = document.querySelector("#fetchButton");
const todoIdInput = document.querySelector("#todoId");
const todoDetailsDiv = document.querySelector("#todoDetails");

fetchButton.addEventListener("click", () => {
  const todoId = todoIdInput.value;

  const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        todoDetailsDiv.innerText = `
        \nTitle: ${data.title}\n
        Completed: ${data.completed ? "Yes" : "No"}\n
      `;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      todoDetailsDiv.innerText = "Error fetching data.";
    });
});