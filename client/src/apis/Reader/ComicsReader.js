import axios from "axios";
import HOST from "../host";
export const getHotComicsStory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/getHotComicsStory`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const getFullComicsStory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/getAllComicsStoryFull`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const getUpdateComicsStory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/getAllComicsStoryUpdate`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const getComicById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/comic/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const getFileOfChapper = (id_chapper) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/fileOfChapper/${id_chapper}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
