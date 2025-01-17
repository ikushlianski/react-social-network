import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.store.getState().navbar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() => <Dialogs state={props.store.getState().dialogsPage}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile
                            post={props.store.getState().profilePage}
                            addPost={()=> props.store.dispatch({type: "ADD-POST"})}
                            updateNewPostText={(value)=> props.store.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: value})}
                        />}
                    />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;




