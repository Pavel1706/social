import React from 'react';
import styles from './users.module.css'
import axios from 'axios';
import {UserType} from "../../Redux/usersReducer";
import {Users} from "./Users";

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

    // constructor(props:UsersStateType) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    render() {



        return <Users setUsers={this.props.setUsers} currentPage={this.props.currentPage} setCurrent={this.props.setCurrent}
         setTotalUsersCount={this.props.setTotalUsersCount} totalUsersCount={this.props.totalUsersCount} usersState={this.props.usersState}
        followUser={this.props.followUser} pageSize={this.props.pageSize} unfollowUser={this.props.unfollowUser}/>
    }
}