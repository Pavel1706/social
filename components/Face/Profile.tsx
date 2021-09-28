import React from 'react';

import {ProfileInfo} from "./FaceInfo/ProfileInfo";

import {SuperDialogsContainer} from "./myDreams/MyPostsContainer";


export const Profile = () => {

    return (
        <div>
            <ProfileInfo message={'Hello there buddy'}/>
            <SuperDialogsContainer

            />
        </div>
    )
}