import React from 'react';
import {ConversationType} from "../../Redux/State";
import style from './Friend/friends.module.css'

type ConversationArrayType = {
    dialogs: Array<ConversationType>
}


export const Friends =(props:ConversationArrayType)=>{

    return(
        <span className={style.avatar} >

            {props.dialogs.map(t=>  <div key={t.id}> <img alt={'foto'} className={style.avatar} src={t.foto} />{t.name}</div> )}

        </span>


    )
}
