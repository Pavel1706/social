import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import p from '../Conversation.module.css'
import {Message} from "../Message";
import {AllMessageType} from "./MessageItemContainer";


export const MessageItem = (props: AllMessageType) => {


    let messageElement = props.messagePage.messageData.map(m => <Message key ={m.id} message={m.message}/>)

    const addNewMessage = (formData: FormDataType) => {
        debugger
        props.sendMessage(formData.newMessageBody)

    }

   if (!props.isAuth) return <Redirect to={'/login'}/>
    return (

        <div className={p.text}>
            <div className={p.dialogs}>

            </div>

            <div className={p.messages}>
                {messageElement}

                <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> =
    (props) => {

        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter message'} name={'newMessageBody'} component={'textarea'} />
                </div>
                <div><button >add</button></div>



            </form>
        )
    }

const MessageReduxForm = reduxForm<FormDataType>({form: 'dialogMessage' })(AddMessageForm)

