import axios from "axios"
import HOST from "../host.js"
export const getCategoryById = (id) => new Promise(async(resolve,reject) => {
    new Promise(async (resolve, reject) => {
        try {
          const response = await axios({
            url: `/story_categories/${id}`,
            method: "get",
          });
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
})