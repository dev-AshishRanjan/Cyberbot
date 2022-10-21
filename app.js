const loading1 = document.querySelector("#loading1");
const loading2 = document.querySelector("#loading2");
const loading3 = document.querySelector("#loading3");
const loading3Pic1 = document.querySelector("#i1");
const loading3Pic2 = document.querySelector("#i2");
const loading3Pic3 = document.querySelector("#i3");
const loading3Pic4 = document.querySelector("#i4");
const loading3Pic5 = document.querySelector("#i5");
const loading3Pic6 = document.querySelector("#i6");
const overlayer = document.querySelector("#overlayer");
const overlayer2 = document.querySelector("#overlayer2");
setTimeout(() => {
  loading1.style.opacity = "0";
}, 2000);
setTimeout(() => {
  loading2.style.opacity = "0";
}, 5000);
setTimeout(() => {
  loading3.style.transform = "translateY(-100vh)";
}, 17000);

setTimeout(() => {
  loading3Pic1.style.left = "0";
}, 5000);
setTimeout(() => {
  loading3Pic2.style.left = "20%";
  loading3Pic2.style.top = "20%";
}, 7000);
setTimeout(() => {
  loading3Pic3.style.left = "0";
}, 9000);
setTimeout(() => {
  loading3Pic4.style.left = "0";
}, 11000);
setTimeout(() => {
  loading3Pic5.style.left = "0";
}, 13000);
setTimeout(() => {
  loading3Pic6.style.opacity = "1";
  loading3Pic5.classList.add("crop");
}, 15000);
setTimeout(() => {
  overlayer.style.opacity = "0";
  overlayer2.style.opacity = "0";
  loading1.style.display = "none";
  loading2.style.display = "none";
}, 17000);
