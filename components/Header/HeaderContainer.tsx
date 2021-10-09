import React, {useEffect} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import style from './Header.module.css';
import {Header} from "./Header";
import axios from 'axios';
import {AppStateType} from "../../Redux/reduxStore";
import {NewProfileType, setUserProfileAC} from "../../Redux/profileReducer";
import {connect} from 'react-redux';
import {authReducer, setUserDataAC} from "../../Redux/authReducer";


type DataType = {
    id: number | null
    email: string | null
    login: string | null
    setUserData: (id:number, email:string, login:string)=> void

}
type MapStatePropsType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
}

export function HeaderContainer(props:DataType) {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode ===0){
                    props.data.setUserData(response.data.)
                }
                debugger
            })

    }, [])
    return (
        <Header/>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    data: state.auth.data
})

let WithUrlDataContainerComponent = withRouter(HeaderContainer)


export default connect(mapStateToProps, {
    auth: authReducer
})(WithUrlDataContainerComponent)
//  class ProfileContainer extends React.Component<PropsType, {}>{
//
//     componentDidMount(){
//         let userId = this.props.match.params
//         debugger
//         console.log(userId)
//         if(!userId){
//             JSON.stringify(userId)
//         }
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
//             .then(response => {
//                 debugger
//                 this.props.setUserProfile(response.data)
//             })
//     }
//
//     render()
//     {
//         return (
//             <Profile {...this.props} profile={this.props.profile} />
//         )
//     }
// }