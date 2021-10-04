import React from 'react';
import {ProfileInfo} from "./FaceInfo/ProfileInfo";
import {SuperDialogsContainer} from "./myDreams/MyPostsContainer";

type ProfileType = {
    profile: any
}

export const Profile = (props:ProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <SuperDialogsContainer

            />
        </div>
    )
}