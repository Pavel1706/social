import axios from 'axios';
import React from 'react';
import styles from "./users.module.css";
import {UserType} from "../../Redux/usersReducer";

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



export let Users = (props: UsersStateType) => {



    const onPageChanged = (pageNumber: number) => {
        props.setCurrent(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

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
                                 onPageChanged(t)
                             }}>{t}</span>
            })}

        </div>
        {
            props.usersState.map(t => <div key={t.id}>
                <span>
                    <div>
                        <img
                            src={t.photos.small != null ? t.photos.small : 'https://i.pinimg.com/736x/9b/80/f0/9b80f06c91e4c03c63059d35ff943168.jpg'}
                            className={styles.photo}/>
                    </div>
                    <div>
                        {
                            t.followed
                                ?
                                <button onClick={() => {
                                    props.unfollowUser(t.id)
                                }}>UnFollow</button>
                                :
                                <button onClick={() => {
                                    props.followUser(t.id)
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
