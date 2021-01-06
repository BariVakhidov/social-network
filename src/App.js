import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Nav state={props.state.navbar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}/>}/>
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage} postMessage={props.postMessage} addLike={props.addLike}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    );
};
export default App;
