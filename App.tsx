import React, {useEffect} from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Conversation} from "./components/Conversation/Conversation";
import {Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {store} from "./Redux/State";
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/LoginComponent/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {useDispatch, useSelector} from 'react-redux';
import {initializeTC} from "./Redux/appReducer";
import {AppStateType} from "./Redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";





export function App() {
    let initialized = useSelector<AppStateType>(state => state.app.initialized)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeTC())
    }, [])

    if (!initialized) {
                return <Preloader loading={true}/>}
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav dialogs={store._state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content '>
                    <Route path='/conversation' render={() => <Conversation/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                    <Route path='/friends' render={() => <Friends dialogs={store._state.dialogsPage.dialogs}/>}/>
                </div>
            </div>

        );
    }



