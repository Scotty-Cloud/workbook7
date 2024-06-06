// Define an asynchronous function to fetch data
async function fetchData() {
  try {
    //simulate an asynchronous operation with a delay of 1 second
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("Success"), 1000); // Logs "Success!" after 1 second
    });
    // Log the result after the asynchronous operation is complete
    console.log(result);
  } catch (error) {
    // Handle any errors that occur during the asynchronous operation
    console.error("Error:", error);
  }
}