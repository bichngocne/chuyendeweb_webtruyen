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
export { getStories, apiGetStoryById };
