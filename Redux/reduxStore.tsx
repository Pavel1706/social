import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    dialogsPage: dialogsReducer,
    users : usersReducer
})

export let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
// export type StoreType = typeof store;
// export type StateType = ReturnType<typeof store.getState>;