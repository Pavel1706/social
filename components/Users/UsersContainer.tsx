import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC, setToggleIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UsersActionsType,
    UserType
} from '../../Redux/usersReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/Api";

export type UsersStateType = {
    usersState: Array<UserType>
    followUser: (id: number) => void;
    unfollowUser: (id: number) => void;
    setUsers: (users: Array<UserType>) => void;
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrent: (value: number) => void
    setTotalUsersCount: (value: number) => void
    isFetching: boolean
    setToggleIsFetching: (value: boolean)=> void
}


export class UsersContainerComponent extends React.Component<UsersStateType, {}> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrent(pageNumber)
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }


    render() {


        return <>
            <Preloader loading ={this.props.isFetching}/>
            <Users onPageChanged={this.onPageChanged}
                   setUsers={this.props.setUsers}
                   currentPage={this.props.currentPage}
                   setCurrent={this.props.setCurrent}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   totalUsersCount={this.props.totalUsersCount}
                   usersState={this.props.usersState}
                   followUser={this.props.followUser}
                   pageSize={this.props.pageSize}
                   unfollowUser={this.props.unfollowUser}
                   setToggleIsFetching={this.props.setToggleIsFetching}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) =>
{
    return {
        usersState: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) =>
{
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
        setCurrent: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        setToggleIsFetching: (loading:boolean)=>{
            dispatch(setToggleIsFetchingAC(loading))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followUser: followAC,
    unfollowUser: unFollowAC,
    setUsers: setUsersAC,
    setCurrent: setCurrentPageAC,
    setTotalUsersCount: setUsersTotalCountAC,
    setToggleIsFetching: setToggleIsFetchingAC,
    })(UsersContainerComponent)
