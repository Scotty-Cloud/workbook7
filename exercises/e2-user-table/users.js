fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => {
    const tableBody = document.querySelector('#todo-data')
    const row = document.createElement('tr')

    const cell1 = document.createElement('td')
    cell1.innerText = data.id

    const cell2 = document.createElement('td')
    cell2.innerText = data.title

    const cell3 = document.createElement('td')
    cell3.innerText = data.comeleted? 'Yes' : 'No'

    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)

    tableBody.appendChild(row)
})
.catch(error => console.error('Error:', error));