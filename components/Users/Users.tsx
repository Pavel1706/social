import axios from 'axios';
import React from 'react';
import styles from "./users.module.css";
import {followUserTC, UserType} from "../../Redux/usersReducer";
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../API/Api";

type UsersStateType = {
    usersState: Array<UserType>
    setUsers: (users: Array<UserType>) => void;
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrent: (value: number) => void
    setTotalUsersCount: (value: number) => void
    onPageChanged: (value: number) => void
    setToggleIsFetching: (value: boolean) => void
    setToggleIsFollowing: (value: boolean, userId:number) => void
    followingInProgress: Array<number>
    followUserTC:(userId:number)=> void
    unFollowUserTC:(userId:number)=> void

}


export let Users = (props: UsersStateType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(t => {
                return <span className={props.currentPage === t ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(t)
                             }}>{t}</span>
            })}

        </div>
        {
            props.usersState.map(t => <div key={t.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + t.id}>
                        <img
                            src={t.photos.small != null ? t.photos.small : 'https://i.pinimg.com/736x/9b/80/f0/9b80f06c91e4c03c63059d35ff943168.jpg'}
                            className={styles.photo}/>
                            </NavLink>
                    </div>
                    <div>
                        {
                            t.followed
                                ?
                                <button disabled={props.followingInProgress.some(id=>id===t.id)} onClick={() => {
                                    debugger
                                    props.setToggleIsFollowing(true,t.id)
                                      props.unFollowUserTC(t.id)


                                }}>UnFollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id=>id===t.id)} onClick={() => {
                                    debugger
                                    props.setToggleIsFollowing(true,t.id)
                                    props.followUserTC(t.id)

                                }}>Follow</button>

                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{t.name}</div>
                        <div>{t.status}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
