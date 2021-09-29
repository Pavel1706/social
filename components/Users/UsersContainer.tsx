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
import {AppStateType} from "../../Redux/reduxStore";
import {Users} from "./Users";
import axios from 'axios';

type UsersStateType = {
    usersState: Array<UserType>
    followUser: (id: number) => void;
    unfollowUser: (id: number) => void;
    setUsers: (users: Array<UserType>) => void;
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrent: (value: number) => void
    setTotalUsersCount: (value: number) => void
}


export class UsersAPIComponent extends React.Component<UsersStateType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrent(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {


        return <Users onPageChanged={this.onPageChanged}
                      setUsers={this.props.setUsers}
                      currentPage={this.props.currentPage}
                      setCurrent={this.props.setCurrent}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      totalUsersCount={this.props.totalUsersCount}
                      usersState={this.props.usersState}
                      followUser={this.props.followUser}
                      pageSize={this.props.pageSize}
                      unfollowUser={this.props.unfollowUser}/>
    }
}

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
