function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}

const BASE_URL = "assets/images";

const images = ["background.webp"];

images.forEach((imgSrc) => preload_image([BASE_URL, imgSrc].join("/")));

console.log("x");
