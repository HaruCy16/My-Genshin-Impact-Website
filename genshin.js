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

/*Change Backround feature Char Section*/

/*Character Section BG Variable Declaration*/
const characterBackground = document.getElementById("characters");

/*Xiao*/
const xiaoHover = document.getElementById("xiaoImageCard");

xiaoHover.addEventListener("mouseover", () => {
  characterBackground.style.backgroundImage = `url(images/charXiao.gif)`;
});

/*Kazuha*/
const kazuhaHover = document.getElementById("kazuhaImageCard");

kazuhaHover.addEventListener("mouseover", () => {
  characterBackground.style.backgroundImage = `url(images/home.gif)`;
});

/*Childe*/
const childeHover = document.getElementById("childeImageCard");

childeHover.addEventListener("mouseover", () => {
  childeHover.src = "images/childeHover.png";
  characterBackground.style.backgroundImage = `url(images/charChilde.gif)`;
});

childeHover.addEventListener("mouseout", () => {
  childeHover.src = "images/childeCard.png";
});

/*Diluc*/
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

/*Back BG to default when Mouseout*/
const defaultBG = document.querySelectorAll(".image-container");

defaultBG.forEach((element) => {
  element.addEventListener("mouseout", () => {
    characterBackground.style.backgroundImage = `url(images/characterDefaultBG.gif)`;
  });
});
