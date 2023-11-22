import axios from "../../axios";

const getCategoriesAdmin = () => new Promise(async(resolve,reject) => {
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
export {getCategoriesAdmin}