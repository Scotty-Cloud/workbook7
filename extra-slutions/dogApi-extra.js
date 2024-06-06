fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    // Get the image URL from the response
    const imageUrl = data.message;

    // Update the src attribute of the img tag
    const imgTag = document.getElementById("dog-image");
    imgTag.src = imageUrl;
  })
  .catch((error) => console.error(error));