import axios from "axios";
import HOST from "../host";
export const getAllWordStory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/stories`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getStoryByIdR = (storyId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/storybyid/${storyId}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const getUserPost = (id_user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/usePost/${id_user}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const getAllChapperOfStory = (storyId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/chapper/${storyId}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const getHotStories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/hotWordStories`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const getHotWordStoriesByCategory = (id_category) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/hotWordStoriesByCategory/${id_category}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const getAllCommentOfStory = (storyId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/commentofstory/${storyId}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const getWordStoriesUpdating = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/WordStoryUpdating`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const getWordStoriesUpdatingByCategory = (id_category) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${HOST}/WordStoryUpdatingByCategory/${id_category}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
