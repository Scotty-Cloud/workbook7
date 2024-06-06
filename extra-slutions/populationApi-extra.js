// solution 1
fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
  .then(response => response.json())
  .then(data => {
    const populationData = data.data;
    const tableBody = document.getElementById('population-data-body');

    populationData.forEach(item => {
      const row = document.createElement('tr');
      row.innerText = `
        \n${item.Year}\n
        ${item.Population}\n
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));