import axios from "axios";
import HOST from "../host";
export const getChaperByIdR = (chapperId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: `${HOST}/chapperInfo/${chapperId}`,
          method: "get",
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  export default{getChaperByIdR}