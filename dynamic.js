let puppyImageElement = document.getElementById("puppyImage");

let likeButtonElement = document.getElementById("likeButton");

let likeIconElement = document.getElementById("likeIcon");

let isImageLiked = false;

function onClickLikeButton() {
  if (isImageLiked === false) {
    puppyImageElement.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";

    likeButtonElement.style.color = "#ffffff";

    likeButtonElement.style.backgroundColor = "#0967d2";

    likeIconElement.style.color = "#0967d2";

    isImageLiked = true;
  } else {
    puppyImageElement.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";

    likeButtonElement.style.color = "#9aa5b1";

    likeButtonElement.style.backgroundColor = "#cbd2d9";

    likeIconElement.style.color = "#cbd2d9";

    isImageLiked = false;
  }
}
