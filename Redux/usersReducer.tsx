import React from 'react';


let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export type  UserType = {
    id: number;
    name: string;
    status?: string;
    photos: {
        small?: string;
        large?: string;
    }
    followed: boolean;
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean


}

export const usersReducer = (state = initialState, action: UsersActionsType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.userId) {
                        return {...t, followed: true}
                    }
                    return t;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.userId) {
                        return {...t, followed: false}
                    }
                    return t;
                })
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'SET-TOGGlE-IS-FETCHING':
            return{...state, isFetching:action.loading}
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount: totalCount
    } as const
}
export const setToggleIsFetchingAC = (loading: boolean) => {
    return {
        type: 'SET-TOGGlE-IS-FETCHING',
        loading: loading
    } as const
}

type setToggleIsFetchingACType = ReturnType<typeof setToggleIsFetchingAC>
type setUsersTotalCountType = ReturnType<typeof setUsersTotalCountAC>
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
type ChangeUserFollowType = ReturnType<typeof followAC>
type ChangeUserUnFollowType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
export type UsersActionsType = ChangeUserFollowType | ChangeUserUnFollowType
    | SetUsersType | SetCurrentPageType | setUsersTotalCountType | setToggleIsFetchingACType

