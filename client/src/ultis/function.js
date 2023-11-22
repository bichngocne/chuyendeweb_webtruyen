import CryptoJS from "crypto-js";
import { Link } from "react-router-dom";

// function create slug from name
function createSlug(string) {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return string
    .toString()
    .toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a")
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e")
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, "i")
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o")
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u")
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y")
    .replace(/đ/gi, "d")
    .replace(/\s+/g, "-")
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
//function encrypt Id

const encryptData = (text, secretPass) => {
  const encryptedText = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    secretPass
  ).toString();
  const encodedText = btoa(encryptedText);
  return encodedText;
};
//function send story detail
const callDetail = (params,text) => {
  return (<Link
    to={`/management-story/story/${createSlug(params.row.name)}/${encryptData(
      params.row.id,
      process.env.REACT_APP_SECRET_KEY_ID_STORY || 'this is secret'
    )}`}
  >
    {text}
  </Link>);
};

const isNumber = (value) => {
  const parsedValue = parseFloat(value);
  return !isNaN(parsedValue) && parsedValue > -1;
};


export { createSlug, encryptData,callDetail,isNumber };
