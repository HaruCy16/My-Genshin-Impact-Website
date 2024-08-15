/*Home Section BG Change*/
const homeSection = document.getElementById("home");

const homeBg = ["images/home.gif", "images/home2.gif", "images/home5.gif"];

homeBackgroundIndex = 0;

function changeBackgroundImage() {
  homeSection.style.backgroundImage = `url(${homeBg[homeBackgroundIndex]})`;
  homeBackgroundIndex = (homeBackgroundIndex + 1) % homeBg.length;
}

setInterval(changeBackgroundImage, 3000);

changeBackgroundImage();

/*Change image when hover Childe*/
const imgHover = document.getElementById("childeImageCard");

imgHover.addEventListener("mouseover", () => {
  imgHover.src = "images/childeHover.png";
});

imgHover.addEventListener("mouseout", () => {
  imgHover.src = "images/childeCard.png";
});

/*Change image when hover Diluc*/
const dilucHover = document.getElementById("dilucImageCard");

dilucHover.addEventListener("mouseover", () => {
  dilucHover.src = "images/dilucHover.png";
});

dilucHover.addEventListener("mouseout", () => {
  dilucHover.src = "images/dilucCard.png";
});
