// solution 2 .then method
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

// solution 3 async await method
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