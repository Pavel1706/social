import axios from "axios";
import { useEffect } from "react";
import {NewProfileType} from "../Redux/profileReducer";


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
     },
     follow(userId:number){
         return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}
         )
     },
     unFollow(userId:number){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
     }
 }

 export const loginAPI = {
     getLogin() {
         return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)

     }
 }
export const profileAPI = {
    getProfile(userId:string) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)

    }
}

