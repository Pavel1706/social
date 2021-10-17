import React, {useEffect} from 'react';
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {Header} from "./Header";
import {AppStateType} from "../../Redux/reduxStore";
import {connect,useDispatch} from 'react-redux';
import {getAuthTC, setUserDataAC} from "../../Redux/authReducer";


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
        id: number
        email: string
        login: string
    }
    isAuth: boolean

}
type MapDispatchPropsType={
    setUserData: (id:number, email:string, login:string)=> void

}

 type UsersStateType= MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType>& UsersStateType

function HeaderContainer(props:PropsType) {
const dispatch = useDispatch()
    useEffect(() => {
dispatch(getAuthTC())


    }, [])
    return (
        <Header data={props.data} isAuth={props.isAuth}  />
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    data: state.auth.data,
    isAuth: state.auth.isAuth,

})

let WithUrlDataContainerComponent = withRouter(HeaderContainer)


export default connect(mapStateToProps, {
    setUserData: setUserDataAC,
    getLogin:getAuthTC
})(WithUrlDataContainerComponent)
