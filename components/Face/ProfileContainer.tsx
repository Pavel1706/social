import axios from 'axios';
import React, { useEffect } from 'react';
import {Profile} from "./Profile";

import { connect } from 'react-redux';
import {AppStateType} from "../../Redux/reduxStore";
import {NewProfileType, setUserProfileAC} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';



type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: NewProfileType
}

type MapDispatchPropsType ={
    setUserProfile:(profile:NewProfileType)=> void
}
type UsersStateType= MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType>& UsersStateType

function ProfileContainer (props:PropsType){

    useEffect(()=>{
        let userId = props.match.params.userId
        debugger
        console.log(userId)
        if(!userId){
            JSON.stringify(userId)
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
            .then(response => {
                debugger
                props.setUserProfile(response.data)
            })
    },[])

        return (
            <Profile profile={props.profile} />
        )

}




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

const mapStateToProps = (state:AppStateType) : MapStatePropsType=>    ( {
        profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent)