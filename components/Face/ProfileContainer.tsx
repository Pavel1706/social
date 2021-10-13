import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect, useDispatch} from 'react-redux';
import {AppStateType} from "../../Redux/reduxStore";
import {NewProfileType, setProtileTC, setUserProfileAC} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: NewProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: NewProfileType) => void
}
type UsersStateType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & UsersStateType

function ProfileContainer(props: PropsType) {
    const dispatch = useDispatch()
    useEffect(() => {
        let userId = props.match.params.userId
        console.log(userId)
        if (!userId) {
            JSON.stringify(userId)
        }
        dispatch(setProtileTC(userId))

    }, [])

    return (
        <Profile profile={props.profile}/>
    )

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(WithUrlDataContainerComponent)