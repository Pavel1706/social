import axios from "axios";


// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'fae6bcdf-1b7b-4b5f-8f9c-eecd7cb26aa8',
    }
})


 export const usersAPI = {
     getUsers(currentPage: number, pageSize: number)  {
         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
             .then(responce => responce.data)
     }
 }

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(responce => responce.data)
// }