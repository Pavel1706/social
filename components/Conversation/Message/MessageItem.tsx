import React, {ChangeEvent} from 'react';
import { Redirect } from 'react-router-dom';
import p from '../Conversation.module.css'
import {Message} from "../Message";
import {AllMessageType} from "./MessageItemContainer";


export const MessageItem = (props: AllMessageType) => {


    let messageElement = props.messagePage.messageData.map(m => <Message message={m.message}/>)
    let newTextElement = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    }
    const addNewPost = () => {
        props.sendMessage()
    }

   if (!props.isAuth) return <Redirect to={'/login'}/>
    return (

        <div className={p.text}>
            <div className={p.dialogs}>

            </div>

            <div className={p.messages}>
                {messageElement}
                <div>
                    <textarea value={props.messagePage.newMessage} onChange={newTextElement}> </textarea>
                    <button onClick={addNewPost}>add</button>
                </div>
            </div>
        </div>

    )
}