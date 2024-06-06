let refreshButton = document.getElementById("refresh-button");
let priceContainer = document.getElementById("price-container");

function updatePrices() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      let usdPrice = data.bpi.USD.rate_float;
      let gbpPrice = data.bpi.GBP.rate_float;
      let eurPrice = data.bpi.EUR.rate_float;
      priceContainer.innerText = `
     \nCurrent Bitcoin Price (USD): $${usdPrice.toFixed(2)}\n
      \nCurrent Bitcoin Price (GBP): $${gbpPrice.toFixed(2)}\n
      \nCurrent Bitcoin Price (EUR): $${eurPrice.toFixed(2)}\n`;
    })
    .catch((error) => console.error(error));
}

refreshButton.addEventListener("click", updatePrices);

// Call updatePrices() once to display the initial prices
updatePrices();