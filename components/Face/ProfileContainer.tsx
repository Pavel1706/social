import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect, useDispatch} from 'react-redux';
import {AppStateType} from "../../Redux/reduxStore";
import {
    getProfileStatusTC,
    NewProfileType,
    setProfileTC,
    setUserProfileAC, updateStatusTC
} from "../../Redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";



type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: NewProfileType
    status: string

}

type MapDispatchPropsType = {
    setUserProfile: (profile: NewProfileType) => void
    upDateStatus: (value:string)=> void
}
type UsersStateType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & UsersStateType

function ProfileContainer(props: PropsType) {

    const dispatch = useDispatch()
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId&&props.profile) {
           userId= props.profile.userId.toString()
        }
        dispatch(setProfileTC(userId))

            dispatch(getProfileStatusTC(userId))

    }, [])

    return (
        <Profile profile={props.profile} status={props.status} updateStatus={props.upDateStatus}/>
    )

}




const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile: setProfileTC,
        getStatus:getProfileStatusTC,
        upDateStatus:updateStatusTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)