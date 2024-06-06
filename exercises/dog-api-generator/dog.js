// solution 2 .then method
// const imgTag = document.querySelector("#dog-image");
// const generateButton = document.querySelector("#generate-new-image");

// generateButton.addEventListener('click', () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((data) => {
//     const imageUrl = data.message;
//     imgTag.src = imageUrl
//   })
//   .catch((error) => console.error(error))
// })

// solution 3 async await method
const imgTag = document.querySelector("#dog-image");
const generateButton = document.querySelector("#generate-new-image");

generateButton.addEventListener('click', async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageUrl = data.message;
    imgTag.src = imageUrl;
  } catch (error) {
    console.error(error);
  }
})