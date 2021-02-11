import React, {Suspense} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Settings from "./components/Settings/Settings";
import NavContainer from "./components/Navbar/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import FriendsContainer from "./components/Friends/Friends";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {Redirect, Switch, withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavContainer/>
                <div
                    className={"app-wrapper-content".concat(" ", this.props.blackTheme && "app-wrapper-content-black")}>
                    <Suspense fallback={<Preloader/>}>
                       <Switch>
                           <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                           <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                           <Route path="/login" render={() => <Login/>}/>
                           <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                           <Route path="/news" component={News}/>
                           <Route path="/users/:friends?" render={() => <UsersContainer/>}/>
                           <Route path="/music" component={Music}/>
                           <Route path="/friends" component={FriendsContainer}/>
                           <Route path="/settings" component={Settings}/>
                           <Route path="*" render={()=><div>404 NOT FOUND</div>}/>
                       </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        blackTheme: state.app.blackTheme
    }
}
const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
};
export default SocialNetworkApp;
