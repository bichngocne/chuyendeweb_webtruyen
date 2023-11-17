import axios from "../../axios";
//api get story
const getStories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/stories",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
  const getStoriesApproved = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/storiesapproved",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
  const getStoriesPending = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/storiespending",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

//api get story by id

//api get story by id
const apiGetStoryById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/story/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
///story/category/:id
const apiGetCategoryOfStoryById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/story/category/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

  const apiGetUserOfStoryById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/story/user/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export { getStories,getStoriesApproved,getStoriesPending,apiGetUserOfStoryById, apiGetStoryById,apiGetCategoryOfStoryById };