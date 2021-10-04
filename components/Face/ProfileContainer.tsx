import axios from 'axios';
import React from 'react';
import {Profile} from "./Profile";

import { connect } from 'react-redux';
import {AppStateType} from "../../Redux/reduxStore";
import {setUserProfileAC} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType ={
    setUserProfile:(value:any)=> void
}
type UsersStateType= MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType>& UsersStateType

 class ProfileContainer extends React.Component<PropsType, {}>{

    componentDidMount(){
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render()
    {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state:AppStateType) : MapStatePropsType=>    ( {
        profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent)