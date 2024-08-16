/*Navigation Smooth Transition*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*Explore button*/
document.getElementById("explore").addEventListener("click", () => {
  document.getElementById("characters").scrollIntoView({ behavior: "smooth" });
});

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

/*Character Section BG Variable Declaration*/
const characterBackground = document.getElementById("characters");

/*Change image when hover Xiao*/
const xiaoHover = document.getElementById("xiaoImageCard");

xiaoHover.addEventListener("mouseover", () => {
  characterBackground.style.backgroundImage = `url(images/charXiao.gif)`;
});

/*Kazuha*/
const kazuhaHover = document.getElementById("kazuhaImageCard");

kazuhaHover.addEventListener("mouseover", () => {
  characterBackground.style.backgroundImage = `url(images/home.gif)`;
});

/*Change image when hover Childe*/
const childeHover = document.getElementById("childeImageCard");

childeHover.addEventListener("mouseover", () => {
  childeHover.src = "images/childeHover.png";
  characterBackground.style.backgroundImage = `url(images/charChilde.gif)`;
});

childeHover.addEventListener("mouseout", () => {
  childeHover.src = "images/childeCard.png";
});

/*Change image when hover Diluc*/
const dilucHover = document.getElementById("dilucImageCard");

dilucHover.addEventListener("mouseover", () => {
  dilucHover.src = "images/dilucHover.png";
  characterBackground.style.backgroundImage = `url(images/charDiluc.gif)`;
});

dilucHover.addEventListener("mouseout", () => {
  dilucHover.src = "images/dilucCard.png";
});

/*Scaramouche*/
const scaraHover = document.getElementById("scaraImageCard");

scaraHover.addEventListener("mouseover", () => {
  characterBackground.style.backgroundImage = `url(images/charScara.gif)`;
});
