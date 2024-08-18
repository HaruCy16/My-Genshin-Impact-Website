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

/*Change Background and show CharInfo feature Char Section*/

/*Character Section BG Variable Declaration*/
const characterBackground = document.getElementById("characters");

/*Xiao*/
const xiaoHover = document.getElementById("xiaoImageCard");
const xiaoDsc = document.getElementById("xiaoInfo");

xiaoHover.addEventListener("mouseover", () => {
  characterBackground.style.backgroundImage = `url(images/charXiao.gif)`;
  xiaoDsc.style.display = "block";
  xiaoDsc.style.opacity = "1";
});

xiaoHover.addEventListener("mouseout", () => {
  xiaoDsc.style.opacity = "0";
  setTimeout(function () {
    xiaoDsc.style.display = "none";
  }, 300);
});

/*Kazuha*/
const kazuhaHover = document.getElementById("kazuhaImageCard");
const kazuhaDsc = document.getElementById("kazuhaInfo");

kazuhaHover.addEventListener("mouseover", () => {
  characterBackground.style.backgroundImage = `url(images/home.gif)`;
  kazuhaDsc.style.display = "block";
  kazuhaDsc.style.opacity = "1";
});

kazuhaHover.addEventListener("mouseout", () => {
  kazuhaDsc.style.opacity = "0";
  setTimeout(function () {
    kazuhaDsc.style.display = "none";
  }, 300);
});

/*Childe*/
const childeHover = document.getElementById("childeImageCard");
const childeDsc = document.getElementById("childeInfo");

childeHover.addEventListener("mouseover", () => {
  childeHover.src = "images/childeHover.png";
  characterBackground.style.backgroundImage = `url(images/charChilde.gif)`;
  childeDsc.style.display = "block";
  childeDsc.style.opacity = "1";
});

childeHover.addEventListener("mouseout", () => {
  childeHover.src = "images/childeCard.png";
  childeDsc.style.opacity = "0";
  setTimeout(function () {
    childeDsc.style.display = "none";
  }, 300);
});

/*Diluc*/
const dilucHover = document.getElementById("dilucImageCard");
const dilucDsc = document.getElementById("dilucInfo");

dilucHover.addEventListener("mouseover", () => {
  dilucHover.src = "images/dilucHover.png";
  characterBackground.style.backgroundImage = `url(images/charDiluc.gif)`;
  dilucDsc.style.display = "block";
  dilucDsc.style.opacity = "1";
});

dilucHover.addEventListener("mouseout", () => {
  dilucHover.src = "images/dilucCard.png";
  dilucDsc.style.opacity = "0";
  setTimeout(function () {
    dilucDsc.style.display = "none";
  }, 300);
});

/*Scaramouche*/
const scaraHover = document.getElementById("scaraImageCard");
const scaraDsc = document.getElementById("scaraInfo");

scaraHover.addEventListener("mouseover", () => {
  characterBackground.style.backgroundImage = `url(images/charScara.gif)`;
  scaraDsc.style.display = "block";
  scaraDsc.style.opacity = "1";
});

scaraHover.addEventListener("mouseout", () => {
  scaraDsc.style.opacity = "0";
  setTimeout(function () {
    scaraDsc.style.display = "none";
  }, 300);
});

/*Back BG to default when Mouseout*/
const defaultBG = document.querySelectorAll(".image-container");

defaultBG.forEach((element) => {
  element.addEventListener("mouseout", () => {
    characterBackground.style.backgroundImage = `url(images/characterDefaultBG.gif)`;
  });
});
