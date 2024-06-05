// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     // Get the image URL from the response
//     const imageUrl = data.message;

//     // Update the src attribute of the img tag
//     const imgTag = document.getElementById("dog-image");
//     imgTag.src = imageUrl;
//   })
//   .catch((error) => console.error(error));

const imgTag = document.getElementById("dog-image");
const generateButton = document.getElementById("generate-new-image");

generateButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.message;
    imgTag.src = imageUrl
  })
  .catch((error) => console.error(error))
})