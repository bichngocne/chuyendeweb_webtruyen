import axios from "../../axios";
import qs from "qs";
export const login = async (username, password) => {
  try {
    const response = await axios.post("/login", {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const register = async (dataA) => {
  
    try {
      const response = await axios.post("/register",dataA);
    if(response.status===200){
      return response.data;
    }
  }catch(error){
  };
};
