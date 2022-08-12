const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("background-image");

bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url("img/${chosenImage}")`;
document.body.style.backgroundSize = "cover";
