// solution 1 .then method
// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//   .then((response) => response.json())
//   .then((info) => info.data)
//   .then((populationDataArray) => {
//     let tableBody = document.querySelector("#population-data-body");
//     for (let populationData of populationDataArray) {
//       let row = tableBody.insertRow();

//       let cell1 = row.insertCell();
//       cell1.innerText = populationData.Year;

//       let cell2 = row.insertCell();
//       cell2.innerText = populationData.Population;
//     }
//   });

// solution 2 async await method
async function fetchData() {
  try {
    let response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    let info = await response.json();
    let populationDataArray = info.data;

    let tableBody = document.querySelector("#population-data-body");
    for (let populationData of populationDataArray) {
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