import axios from "axios";


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
     },
     follow(userId:number){
         return instance.post(`follow/${userId}`, {}
         )
     },
     unFollow(userId:number){
        return instance.delete(`follow/${userId}`)
     }
 }

 export const AuthMeAPI = {
     getAuth() {
         return instance.get(`auth/me`)

     }
 }
export const profileAPI = {
    getProfile(userId:string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`profile/status/`, {status:status})
    }
}

