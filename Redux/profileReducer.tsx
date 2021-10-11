import React from 'react';
import {ProfileType} from "./State";


let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hello! How`s life?', like: 22},
        {id: 2, message: 'Hey hey! How`re you things?', like: 15},
        {id: 3, message: 'Hey buddy! How`re you?', like: 35},
        {id: 4, message: 'Hey there! Take it easy?', like: 77},
    ],
    newPostText: '',
    profile: {
        userId: 19583,
        lookingForAJob: true,
        lookingForAJobDescription: 'it will be fun',
        fullName: 'Potapiсh',
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: 'https://avatarko.ru/img/kartinka/7/zhivotnye_sobaka_6243.jpg',
            large: 'https://avatarko.ru/img/kartinka/7/zhivotnye_sobaka_6243.jpg'
        }
    }
}
type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type NewProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string | undefined
        large: string | undefined
    }
}
export type InitialStateType = {
    posts: Array<ProfileType>
    newPostText: string
    profile: NewProfileType

}

export const profileReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: ProfileType = {
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
        case 'SET-USER-PROFILE':
            return {
                ...state, profile: action.profile
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
export const setUserProfileAC = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}


type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
type SetUserProfileType = ReturnType<typeof setUserProfileAC>
type AddPostActionType = ReturnType<typeof addPostAC>
type ProfileActionsType = ChangeNewTextActionType | AddPostActionType | SetUserProfileType
