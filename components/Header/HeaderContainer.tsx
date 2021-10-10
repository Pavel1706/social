import React, {useEffect} from 'react';
import {NavLink, RouteComponentProps, withRouter} from 'react-router-dom';
import style from './Header.module.css';
import {Header} from "./Header";
import axios from 'axios';
import {AppStateType} from "../../Redux/reduxStore";
import {NewProfileType, setUserProfileAC} from "../../Redux/profileReducer";
import {connect} from 'react-redux';
import {authReducer, setUserDataAC} from "../../Redux/authReducer";

type PathParamsType={
    userId: string
}


export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
type MapStatePropsType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
}
type MapDispatchPropsType={
    setUserData: (id:number, email:string, login:string)=> void
}
 type UsersStateType= MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType>& UsersStateType

function HeaderContainer(props:PropsType) {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode ===0){
                    debugger
                    let {id,email,login}=response.data.data
                    props.setUserData(id,email,login)
                }

            })

    }, [])
    return (
        <Header data={props.data} isAuth={props.isAuth}/>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    data: state.auth.data,
    isAuth: state.auth.isAuth,

})

let WithUrlDataContainerComponent = withRouter(HeaderContainer)


export default connect(mapStateToProps, {
    setUserData: setUserDataAC
})(WithUrlDataContainerComponent)
