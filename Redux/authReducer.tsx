import React from 'react';


let initialState: InitialStateType = {
    data:
        {
    id: 19583,
    email: 'pasha17061987@gmail.com',
    login: 'Pavel1787'
    },
    isAuth:false
}

type DataType = {
        id: number | null
        email: string | null
        login: string | null

}

export type InitialStateType = {
    data: DataType
    isAuth: boolean
}

export const authReducer = (state = initialState, action: UsersActionsType): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA":{
            return {...state,
            data: action.data,
            isAuth:true
            }
        }

        default:
            return state
    }
}


export const setUserDataAC = (id:number, email:string, login:string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id:id,
            email:email,
            login:login,
        }
    } as const
}

type setUserDataACType = ReturnType<typeof setUserDataAC>

export type UsersActionsType =  setUserDataACType

