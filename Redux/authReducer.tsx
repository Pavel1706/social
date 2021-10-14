import React from 'react';
import {AppThunk} from "./reduxStore";
import {loginAPI} from "../API/Api";
import {Dispatch} from 'redux';


let initialState: InitialStateType = {
    data:
        {
            id: 19583,
            email: 'pasha17061987@gmail.com',
            login: 'Pavel1787'
        },
    isAuth: false
}

type DataType = {
    id: number
    email: string
    login: string

}

export type InitialStateType = {
    data: DataType
    isAuth: boolean
}

export const authReducer = (state = initialState, action: LoginActionsType): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}


export const setUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id: id,
            email: email,
            login: login,
        }
    } as const
}



export const getLoginTC = () => (dispatch:Dispatch<setUserDataACType>) => {
        loginAPI.getLogin().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserDataAC(id, email, login))

            }

        })

    }


type setUserDataACType = ReturnType<typeof setUserDataAC>
export type LoginActionsType = setUserDataACType
