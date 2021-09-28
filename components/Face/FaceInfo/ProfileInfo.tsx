import React from 'react';
import p from './FaceInfo.module.css';

type ProfileInfoType = {
    message: string
}


export const ProfileInfo = (props:ProfileInfoType ) => {
    return (
        <div>
            <div>
                <img alt={'foto'}
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </div>
            <div className={p.descriptionBlock}>
                {props.message}
            </div>

        </div>
    )
}