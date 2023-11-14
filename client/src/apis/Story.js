import axios from "axios"
import HOST from "./host"
export const getAllStories = () => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:`${HOST}/stories`,
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})