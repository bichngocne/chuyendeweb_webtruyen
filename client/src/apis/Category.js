import axios from "axios"
import HOST from "./host.js"
export const getAllCategories = () => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:`${HOST}/categories`,
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})