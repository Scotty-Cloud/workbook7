// solution 1 .then method
let refreshButton = document.querySelector("#refresh-button");
let priceContainer = document.querySelector("#price-container");

refreshButton.addEventListener("click", () => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      let usdPrice = data.bpi.USD.rate_float;
      let gbpPrice = data.bpi.GBP.rate_float;
      let eurPrice = data.bpi.EUR.rate_float;
      priceContainer.innerText = `
        Current Bitcoin Price (USD): $${usdPrice.toFixed(2)}
        Current Bitcoin Price (GBP): $${gbpPrice.toFixed(2)}
        Current Bitcoin Price (EUR): $${eurPrice.toFixed(2)}`;
    })
    .catch((error) => console.error(error))
});

// solution 2 async await method
// let refreshButton = document.querySelector("#refresh-button");
// let priceContainer = document.querySelector("#price-container");

// refreshButton.addEventListener("click", asyncHandler);

// async function asyncHandler() {
//   try {
//     let response = await fetch(
//       "https://api.coindesk.com/v1/bpi/currentprice.json"
//     );
//     let data = await response.json();
//     let usdPrice = data.bpi.USD.rate_float;
//     let gbpPrice = data.bpi.GBP.rate_float;
//     let eurPrice = data.bpi.EUR.rate_float;
//     priceContainer.innerText = `
//       Current Bitcoin Price (USD): $${usdPrice.toFixed(2)}
//       Current Bitcoin Price (GBP): $${gbpPrice.toFixed(2)}
//       Current Bitcoin Price (EUR): $${eurPrice.toFixed(2)}`;
//   } catch (error) {
//     console.error(error);
//   }
// }