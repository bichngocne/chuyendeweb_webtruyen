import axios from "../../axios";
import qs from "qs";
// get api post chapper for word story
const apiPostChapper = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "chapper0/create",
        method: "post",
        maxBodyLength: Infinity,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(data),
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
  //api get post chapper img story
  const apiPostChapperImg = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "chapper1/create",
        method: "post",
        data: data,
        headers: { "Content-Type": "multipart/form-data" }, 
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
// get api detail chapper
const apiDetailChapper = async (storyId, number) => {
  try {
    const response = await axios({
      url: `chapper0/${storyId}/${number}`,
      method: "get",
    });
    return response;
  } catch (error) {
    return error;
  }
};
// get api detail chapper for img story
const apiDetailChapperForImgStory = async (storyId, number) => {
  try {
    const response = await axios({
      url: `chapper1/${storyId}/${number}`,
      method: "get",
    });
    return response;
  } catch (error) {
    return error;
  }
};

const apiUpdateChapper = async (data) =>  new Promise(async (resolve, reject) => {
  try {
    const response =  await axios({
      url: "chapper0/edit",
      method: "put",
      maxBodyLength: Infinity,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
    })
    resolve(response);
  } catch (error) {
    reject(error);
  }
});
 

export { apiPostChapper, apiDetailChapper, apiUpdateChapper,apiPostChapperImg,apiDetailChapperForImgStory };
