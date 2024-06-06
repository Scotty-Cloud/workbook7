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

// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//   .then((response) => response.json())
//   .then((info) => info.data)
//   .then((populationDataArray) => {
//     const tableBody = document.querySelector("#population-data-body");
//     for (const populationData of populationDataArray) {
//       let row = tableBody.insertRow();

//       let cell1 = row.insertCell();
//       cell1.innerText = populationData.Year;

//       let cell2 = row.insertCell();
//       cell2.innerText = populationData.Population;
//     }
//   });

async function fetchData() {
  try {
    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const info = await response.json();
    const populationDataArray = info.data;

    const tableBody = document.querySelector("#population-data-body");
    for (const populationData of populationDataArray) {
      let row = tableBody.insertRow();

      let cell1 = row.insertCell();
      cell1.innerText = populationData.Year;

      let cell2 = row.insertCell();
      cell2.innerText = populationData.Population;
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();