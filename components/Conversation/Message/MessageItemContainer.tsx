import React from 'react';
import {AppStateType} from "../../../Redux/reduxStore";
import {MessageItem} from "./MessageItem";
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {addNewMessageAC, InitialStateMessageType, NewMessageAC} from "../../../Redux/messageReducer";

type MessageStatePropsType = {
    messagePage: InitialStateMessageType
    newMessage: string

}
type MapDispatchPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
let messageStateToProps = (state: AppStateType): MessageStatePropsType => {
    return {
        messagePage: state.messagePage,
        newMessage: state.messagePage.newMessage
    }
}

export type AllMessageType = MessageStatePropsType & MapDispatchPropsType

let messageDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(NewMessageAC(body))
        },
        sendMessage: () => {
            dispatch(addNewMessageAC())
        }
    }
}


export const SuperMessageContainer = connect(messageStateToProps, messageDispatchToProps)(MessageItem);