import React from 'react';
import {ProfileInfo} from "./FaceInfo/ProfileInfo";
import {SuperDialogsContainer} from "./myDreams/MyPostsContainer";
import {NewProfileType} from "../../Redux/profileReducer";

type ProfilePropsType = {
    profile: NewProfileType
    status: string
    updateStatus:(value:string)=> void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <SuperDialogsContainer      />
        </div>
    )
}