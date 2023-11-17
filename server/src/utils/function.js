import CryptoJS from "crypto-js";

// function decrypt ID
const decryptData = (encodedText, secretPass) => {
    const encryptedText = atob(encodedText); // Sử dụng atob để giải mã Base64
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretPass);
    const text = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(text);
  };

export {decryptData}