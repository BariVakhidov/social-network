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
import {useMediaQuery} from 'react-responsive'
import HeaderContainer from "./Header/HeaderContainer";
import s from './Content.module.css'
import cn from 'classnames'
import {BlackThemeContext} from '../contexts/theme-context';

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./News/News'));
const Music = React.lazy(() => import('./Music/Music'));

const ContentWithResponsive = ({blackTheme}) => {
    const isDesktop = useMediaQuery({query: '(min-width: 768px)'});
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    return (
        <>
            <BlackThemeContext.Provider value={blackTheme}>
                {isDesktop && <>
                    <Content isMobile={false}/>
                </>}
                {isMobile && <>
                    <Content isMobile={true}/>
                </>}
            </BlackThemeContext.Provider>
        </>

    )
}
export default ContentWithResponsive;

const Content = ({isMobile}) => {
    return (
        <>
            <BlackThemeContext.Consumer>
                {value => <>
                    <HeaderContainer isMobile={isMobile}/>
                    <main className={cn(!isMobile ? s.wrapperContent : s.wrapperContentM)}>
                        <NavContainer isMobile={isMobile}/>
                        <div className={cn((!isMobile ? s.content : s.contentM), {[s.contentBlack]: value})}>
                            <Suspense fallback={<Preloader/>}>
                                <Switch>
                                    <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                                    <Route path="/dialogs" render={() => <DialogsContainer isMobile={isMobile}/>}/>
                                    <Route path="/login" render={() => <Login isMobile={isMobile}/>}/>
                                    <Route path="/profile/:userId?"
                                           render={() => <ProfileContainer isMobile={isMobile}/>}/>
                                    <Route path="/news" component={News}/>
                                    <Route path="/users/:friends?"
                                           render={() => <UsersContainer isMobile={isMobile}/>}/>
                                    <Route path="/music" component={Music}/>
                                    <Route path="/friends" render={() => <FriendsContainer isMobile={isMobile}/>}/>
                                    <Route path="/settings" component={Settings}/>
                                    <Route path="*" render={() => <div className={s.start}>404 NOT FOUND</div>}/>
                                </Switch>
                            </Suspense>
                        </div>
                    </main>
                </>
                }
            </BlackThemeContext.Consumer>
        </>
    )
}