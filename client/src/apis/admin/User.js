import axios from "../../axios";

const getUsersAdmin = () => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:'/users',
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export {getUsersAdmin}