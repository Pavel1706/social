import React from 'react';

let initialState: InitialStateMessageType = {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What`s going on?'},
        {id: 3, message: 'How`re you things'},
        {id: 4, message: 'How`s life?'},
        {id: 5, message: 'I got it!'},
        {id: 6, message: 'Catch you around!'},
    ] as Array<MessageType>,
    newMessage: ''
}
export type InitialStateMessageType = {
    messageData: Array<MessageType>
    newMessage: string
}
type MessageType = {
    id: number
    message: string

}


export const messageReducer = (state: InitialStateMessageType = initialState, action: NewMessageActionType): InitialStateMessageType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            let newPost: MessageType = {
                id: new Date().getTime(),
                message: state.newMessage
            }
            return {
                ...state,
                messageData: [...state.messageData, newPost],
                newMessage: ''

            }
        case "NEW-MESSAGE" :
            return {
                ...state,
                newMessage: action.postText
            }
        default:
            return state
    }
}

export const NewMessageAC = (newMessage: string) => {
    return {
        type: 'NEW-MESSAGE',
        postText: newMessage
    } as const
}
export const addNewMessageAC = () => {
    return {
        type: 'ADD-NEW-MESSAGE'
    } as const
}


export type NewMessageActionType = NewMessageType | AddNewMessageType
type NewMessageType = ReturnType<typeof NewMessageAC>
type AddNewMessageType = ReturnType<typeof addNewMessageAC>