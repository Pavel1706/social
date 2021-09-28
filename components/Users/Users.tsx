import React from 'react';
import styles from './users.module.css'
import axios from 'axios';
import {UserType} from "../../Redux/usersReducer";

type UsersStateType = {
    usersState: Array<UserType>
    followUser: (id: number) => void;
    unfollowUser: (id: number) => void;
    setUsers: (users: Array<UserType>) => void;
    pageSize: number
    totalUsersCount: number
    currentPage:number
    setCurrent: (value:number)=>void
    setTotalUsersCount: (value:number)=>void
}


export class Users extends React.Component<UsersStateType, {}> {

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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
       const onPageChanged = (pageNumber:number)=> {
            this.props.setCurrent(pageNumber)
           axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
               .then(response => {
                   this.props.setUsers(response.data.items)
               })
        }
        return <div>
            <div>
                {pages.map(t=> {
                 return <span className={this.props.currentPage===t ? styles.selectedPage:''}
                 onClick={()=>{onPageChanged(t)}}>{t}</span>
                })}

            </div>
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