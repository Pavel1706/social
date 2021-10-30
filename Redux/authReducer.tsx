import React from 'react';
import {AppThunk} from "./reduxStore";
import {AuthMeAPI} from "../API/Api";
import {Dispatch} from 'redux';
import {stopSubmit} from "redux-form";


let initialState: InitialStateType = {
    data:
        {
            id: 19583,
            email: 'pasha17061987@gmail.com',
            login: 'Pavel1787',
            isAuth: false
        },
    isAuth: false,
    captcha:'',
}

type DataType = {
    id:  number
    email:  string
    login: string
    isAuth: boolean
}

export type InitialStateType = {
    data: DataType
    isAuth: boolean
    captcha: string
}

export const authReducer = (state = initialState, action: LoginActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {

            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth,

            }
        }
        case "GET-CAPTCHA": {

            return {
                ...state,
                captcha: action.captcha
            }
        }
        default:
            return state
    }
}


export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login, isAuth}
    } as const
}
const getCaptchaAC=(captcha:string)=>{
    return {
        type: 'GET-CAPTCHA',
        captcha: captcha
    } as const
}


export const getAuthTC = ():AppThunk=> (dispatch) => {
   return AuthMeAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setUserDataAC(id, email, login, true))
        }
    })
}
export const LoginTC = (email: string, password: string, rememberMe: boolean,captcha:boolean): AppThunk => {
    return (dispatch) => {
        AuthMeAPI.loginIn(email, password, rememberMe, captcha).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthTC())
            } else {
               let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login',{_error:message}))
            }
        })
    }
}


 export const getCaptchaTC=()=>(dispatch:Dispatch)=> {

     AuthMeAPI.getCaptcha().then(response => {
         let captcha = response.data.url

         dispatch(getCaptchaAC(captcha))
     })
 }

export const LoginOutTC = (): AppThunk =>
    (dispatch) => {
        AuthMeAPI.loginOut()
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            }
        })
    }


type setUserDataACType = ReturnType<typeof setUserDataAC>
type getCaptchaACType = ReturnType<typeof getCaptchaAC>

export type LoginActionsType = setUserDataACType | getCaptchaACType
