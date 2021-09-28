import React from 'react';
import styles from './users.module.css'
import axios from 'axios';
import {UserType} from "../../Redux/usersReducer";

type UsersStateType = {
    usersState: Array<UserType>
    followUser: (id: number) => void;
    unfollowUser: (id: number) => void;
    setUsers: (users: Array<UserType>) => void;
}




export class Users extends React.Component<UsersStateType, {}> {

    constructor(props:UsersStateType) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })

        super(props);
    }

    render(){
        return <div>

            {
                this.props.usersState.map(t => <div key={t.id}>
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
                                    this.props.unfollowUser(t.id)
                                }}>UnFollow</button>
                                :
                                <button onClick={() => {
                                    this.props.followUser(t.id)
                                }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{t.name}</div>
                        <div>{t.status}</div>
                    </span>
                        {/*<span>
                        <div>{t.location.country}</div>
                        <div>{t.location.city}</div>
                    </span>*/}
                </span>
                </div>)
            }
        </div>
    }
}