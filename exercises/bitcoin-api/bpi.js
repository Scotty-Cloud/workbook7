// solution 1 .then method
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

// solution 2 async await method
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