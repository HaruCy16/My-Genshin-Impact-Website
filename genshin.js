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
