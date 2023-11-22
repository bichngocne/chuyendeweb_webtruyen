import axios from "axios"
import HOST from "../host.js"
export const getCommentById = (commentId) =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: `${HOST}/commentByid/${commentId}`,
      method: "get",
    });
    resolve(response);
  } catch (error) {
    reject(error);
  }
});
export const getUserComment = (id_user) =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: `${HOST}/userComment/${id_user}`,
      method: "get",
    });
    resolve(response);
  } catch (error) {
    reject(error);
  }
});
export const getCommentBySort = () =>
new Promise(async (resolve, reject) => {
  try {
    const response = await axios({
      url: `${HOST}/comments/sorted`,
      method: "get",
    });
    resolve(response);
  } catch (error) {
    reject(error);
  }
});