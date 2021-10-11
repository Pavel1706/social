import axios from 'axios';
import React from 'react';
import styles from "./users.module.css";
import {UserType} from "../../Redux/usersReducer";
import {NavLink} from 'react-router-dom';

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
    onPageChanged: (value: number) => void
    setToggleIsFetching: (value: boolean) => void
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
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${t.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'fae6bcdf-1b7b-4b5f-8f9c-eecd7cb26aa8'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollowUser(t.id)
                                            }
                                        })


                                }}>UnFollow</button>
                                :
                                <button onClick={() => {
                                    debugger
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${t.id}`, {}, {

                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'fae6bcdf-1b7b-4b5f-8f9c-eecd7cb26aa8'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followUser(t.id)
                                                debugger
                                            }
                                        })

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
