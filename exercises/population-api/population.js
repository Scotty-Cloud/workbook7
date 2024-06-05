// fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
//   .then(response => response.json())
//   .then(data => {
//     const populationData = data.data;
//     const tableBody = document.getElementById('population-data-body');

//     populationData.forEach(item => {
//       const row = document.createElement('tr');
//       row.innerText = `
//         \n${item.Year}\n
//         ${item.Population}\n
//       `;
//       tableBody.appendChild(row);
//     });
//   })
//   .catch(error => console.error(error));

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector("#population-data-body");
    for (const populationData of data.data) {
      let row = tableBody.insertRow();

      let cell1 = row.insertCell();
      cell1.innerText = populationData.Year;

      let cell2 = row.insertCell();
      cell2.innerText = populationData.Population;
    }
  });