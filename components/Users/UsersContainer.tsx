import React from 'react';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unFollowAC, UsersActionsType, UserType} from "../../Redux/usersReducer";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
    return {
        usersState: state.users.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
