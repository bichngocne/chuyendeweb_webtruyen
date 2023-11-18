import axios from "../../axios";

const getCategories = () => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:'/categories',
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export {getCategories}