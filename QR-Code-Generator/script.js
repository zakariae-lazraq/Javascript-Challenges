let ImgBox = document.getElementById("imgBox");
let QrImg = document.getElementById("QrImg");
let input = document.getElementById("data-input");
let sendBtn = document.querySelector("button");
const Qr_URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
function generateQR() {
  if (input.value != "") {
    QrImg.src = Qr_URL + input.value;
    ImgBox.classList.add("show-img");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
}
