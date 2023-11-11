import axios from "../axios";

export const getAllStory = () => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:'/stories',
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})  