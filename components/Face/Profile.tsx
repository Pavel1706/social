import React from 'react';
import {ProfileInfo} from "./FaceInfo/ProfileInfo";
import {SuperDialogsContainer} from "./myDreams/MyPostsContainer";
import {NewProfileType} from "../../Redux/profileReducer";

type ProfilePropsType = {
    profile: NewProfileType
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <SuperDialogsContainer

            />
        </div>
    )
}