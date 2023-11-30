import axios from "../../axios";
//api get story
const getStoriesAdmin = () =>
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
const getStoriesApprovedAdmin = () =>
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
const getStoriesPendingAdmin = () =>
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
const apiGetStoryByIdAdmin = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/storyAdmin/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
///story/category/:id
const apiGetCategoryOfStoryByIdAdmin = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/storyAdmin/category/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

const apiGetUserOfStoryByIdAdmin = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/storyAdmin/user/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
  const approveStory = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/story/approve/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export {
  getStoriesAdmin,
  getStoriesApprovedAdmin,
  getStoriesPendingAdmin,
  apiGetUserOfStoryByIdAdmin,
  apiGetStoryByIdAdmin,
  apiGetCategoryOfStoryByIdAdmin,
  approveStory,
};
