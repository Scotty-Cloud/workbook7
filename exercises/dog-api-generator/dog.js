// solution 1 .then method
// let imgTag = document.querySelector("#dog-image");
// let generateButton = document.querySelector("#generate-new-image");

// generateButton.addEventListener('click', () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((data) => {
//     let imageUrl = data.message;
//     imgTag.src = imageUrl
//   })
//   .catch((error) => console.error(error))
// })

// solution 2 async await method
let imgTag = document.querySelector("#dog-image");
let generateButton = document.querySelector("#generate-new-image");

generateButton.addEventListener('click', async () => {
  try {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json();
    let imageUrl = data.message;
    imgTag.src = imageUrl;
  } catch (error) {
    console.error(error);
  }
})