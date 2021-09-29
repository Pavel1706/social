import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UsersActionsType,
    UserType
} from "../../Redux/usersReducer";
import { UsersAPIComponent} from "./UsersAPIComponent";
import {AppStateType} from "../../Redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
    return {
        usersState: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
            }
}

const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrent: (currentPage:number)=> {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount:number)=> {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
