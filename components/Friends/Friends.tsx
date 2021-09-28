import React from 'react';
import {ConversationType} from "../../Redux/State";
import p from './Friend/friends.module.css'

type ConversationArrayType = {
    dialogs: Array<ConversationType>
}


export const Friends =(props:ConversationArrayType)=>{

    return(
        <div className={p.avatar} >

            {props.dialogs.map(t=> <li key={t.id}><div>{t.name} <img alt={'foto'} className={p.avatar} src={t.foto} /></div></li> )}



        </div>
    )
}
