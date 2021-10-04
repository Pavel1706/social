import React from 'react';
import p from './FaceInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileType = {
    profile: any
}


export const ProfileInfo = (props:ProfileType ) => {
    debugger
    if(!props.profile){
        return <Preloader loading={true} />
    }

    return (
        <div>
            <div>
                <img alt={'foto'}
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </div>
            <div className={p.descriptionBlock}>
                {props.profile}
            </div>

        </div>
    )
}