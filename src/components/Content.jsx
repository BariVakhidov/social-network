import React, {Suspense} from "react";
import NavContainer from "./Navbar/NavContainer";
import Preloader from "./common/Preloader/Preloader";
import {Redirect, Switch} from "react-router";
import {Route} from "react-router-dom";
import Login from "./Login/Login";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import FriendsContainer from "./Friends/Friends";
import Settings from "./Settings/Settings";
import { useMediaQuery } from 'react-responsive'
import HeaderContainer from "./Header/HeaderContainer";
import s from './Content.module.css'
import cn from 'classnames'

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./News/News'));
const Music = React.lazy(() => import('./Music/Music'));

const Content = ({blackTheme}) => {
    const isDesktop = useMediaQuery({query: '(min-width: 768px)'});
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    return (
        <>
            {isDesktop && <>
                <HeaderContainer/>
                <div className="app-wrapper">
                    <NavContainer/>
                    <div className={"app-wrapper-content".concat(" ", blackTheme && "app-wrapper-content-black")}>
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
                                <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </>}
            {isMobile && <>
                <HeaderContainer isMobile={isMobile}/>
                <main className={s.wrapperContent}>
                    <NavContainer isMobile={isMobile}/>
                    <div className={cn(s.content, {[s.contentBlack]: blackTheme})}>
                        <Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                                <Route path="/profile/:userId?" render={() => <ProfileContainer isMobile={isMobile}/>}/>
                                <Route path="/news" component={News}/>
                                <Route path="/users/:friends?" render={() => <UsersContainer isMobile={isMobile}/>}/>
                                <Route path="/music" component={Music}/>
                                <Route path="/friends" render={() => <FriendsContainer isMobile={isMobile}/>}/>
                                <Route path="/settings" component={Settings}/>
                                <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </Suspense>
                    </div>
                </main>
            </>}
        </>

    )
}
export default Content;