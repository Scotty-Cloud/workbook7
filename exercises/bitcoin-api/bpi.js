// const refreshButton = document.getElementById("refresh-button");
// const priceContainer = document.getElementById("price-container");

// function updatePrices() {
//   fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const usdPrice = data.bpi.USD.rate_float;
//       const gbpPrice = data.bpi.GBP.rate_float;
//       const eurPrice = data.bpi.EUR.rate_float;
//       priceContainer.innerText = `
//      \nCurrent Bitcoin Price (USD): $${usdPrice.toFixed(2)}\n
//       \nCurrent Bitcoin Price (GBP): $${gbpPrice.toFixed(2)}\n
//       \nCurrent Bitcoin Price (EUR): $${eurPrice.toFixed(2)}\n`;
//     })
//     .catch((error) => console.error(error));
// }

// refreshButton.addEventListener("click", updatePrices);

// Call updatePrices() once to display the initial prices
// updatePrices();

// const refreshButton = document.querySelector("#refresh-button");
// const priceContainer = document.querySelector("#price-container");

// refreshButton.addEventListener("click", () => {
//   fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const usdPrice = data.bpi.USD.rate_float;
//       const gbpPrice = data.bpi.GBP.rate_float;
//       const eurPrice = data.bpi.EUR.rate_float;
//       priceContainer.innerText = `
//         Current Bitcoin Price (USD): $${usdPrice.toFixed(2)}
//         Current Bitcoin Price (GBP): $${gbpPrice.toFixed(2)}
//         Current Bitcoin Price (EUR): $${eurPrice.toFixed(2)}`;
//     })
//     .catch((error) => console.error(error))
// });

const refreshButton = document.querySelector("#refresh-button");
const priceContainer = document.querySelector("#price-container");

refreshButton.addEventListener("click", asyncHandler);

async function asyncHandler() {
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await response.json();
    const usdPrice = data.bpi.USD.rate_float;
    const gbpPrice = data.bpi.GBP.rate_float;
    const eurPrice = data.bpi.EUR.rate_float;
    priceContainer.innerText = `
      Current Bitcoin Price (USD): $${usdPrice.toFixed(2)}
      Current Bitcoin Price (GBP): $${gbpPrice.toFixed(2)}
      Current Bitcoin Price (EUR): $${eurPrice.toFixed(2)}`;
  } catch (error) {
    console.error(error);
  }
}