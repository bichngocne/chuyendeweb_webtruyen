import axios from "axios"
import HOST from "../host.js"
export const getCategoryById = (categoryId) =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: `${HOST}/categories/${categoryId}`,
      method: "get",
    });
    resolve(response);
  } catch (error) {
    reject(error);
  }
});

export const getCategoryofStory = (storyId)=>{
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/story_categories/${storyId}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}
export const getWordStoryOfCategory = (categoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/typeOfWordStory/${categoryId}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
