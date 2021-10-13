import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Conversation} from "./components/Conversation/Conversation";
import {Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {store} from "./Redux/State";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Face/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';






const App: React.FC = () => {




    return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav dialogs={store._state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content '>
                    <Route path='/conversation' render={()=><Conversation  />}/>
                    <Route path='/profile/:userId?' render={()=><ProfileContainer />}/>
                    <Route path='/users' render={()=><UsersContainer />}/>

                    <Route path='/news' />
                    <Route path='/music' />
                    <Route path='/settings' /><Route path='/friends' render={()=> <Friends dialogs={store._state.dialogsPage.dialogs} />}/>
                </div>
            </div>

    );
}

export default App;
