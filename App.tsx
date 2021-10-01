import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import { Profile} from "./components/Face/Profile";
import {Conversation} from "./components/Conversation/Conversation";
import {Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {store} from "./Redux/State";
import {UsersContainer} from "./components/Users/UsersContainer";



const App: React.FC = () => {


    return (

            <div className='app-wrapper'>
                <Header/>
                <Nav dialogs={store._state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content '>
                    <Route path='/conversation' render={()=><Conversation  />}/>
                    <Route path='/profile' render={()=><Profile    />}/>
                    <Route path='/users' render={()=><UsersContainer />}/>

                    <Route path='/news' />
                    <Route path='/music' />
                    <Route path='/settings' /><Route path='/friends' render={()=> <Friends dialogs={store._state.dialogsPage.dialogs} />}/>
                </div>
            </div>

    );
}

export default App;
