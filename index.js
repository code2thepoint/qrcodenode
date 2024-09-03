const fs = require("fs");
const qrcode = require("qrcode");

const urlCv = "https://burgerresto.netlify.app/";

const run = async() => {
  const QR = await qrcode.toDataURL(urlCv)
  const htmlContent =  `
  <div style="display: flex; justify-content: center; align-items: center;">
  <img src="${QR}">
  </div>
  `;
  fs.writeFileSync('./index.html', htmlContent)
}

run()