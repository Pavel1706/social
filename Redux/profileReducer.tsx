import React from 'react';
import {DreamType, StoreType} from "./State";

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hello! How`s life?', like: 22},
        {id: 2, message: 'Hey hey! How`re you things?', like: 15},
        {id: 3, message: 'Hey buddy! How`re you?', like: 35},
        {id: 4, message: 'Hey there! Take it easy?', like: 77},
    ],
    newPostText: ''
}

export type InitialStateType = {
    posts: Array<DreamType>
    newPostText: string
}

export const profileReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: DreamType = {
                id: new Date().getTime(),
                message: state.newPostText,
                like: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'CHANGE-NEW-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }

        default:
            return state
    }
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}


type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
type AddPostActionType = ReturnType<typeof addPostAC>
type ProfileActionsType = ChangeNewTextActionType | AddPostActionType
