import axios from "../../axios";
import qs from 'qs'
// get api post chapper
const apiPostChapper = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "chapper0/create",
        method: "post",
        maxBodyLength: Infinity,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, 
        data:  qs.stringify(data),
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export {apiPostChapper };
