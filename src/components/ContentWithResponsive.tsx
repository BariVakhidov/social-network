import React, {memo, Suspense} from "react";
import Preloader from "./common/Preloader/Preloader";
import {Redirect, Switch} from "react-router";
import {Route} from "react-router-dom";
import Login from "./Login/Login";
import ProfileContainer from "./Profile/ProfileContainer";
import FriendsContainer from "./Friends/Friends";
import Settings from "./Settings/Settings";
import {HeaderComponent} from "./Header/Header";
import {UsersContainer} from "./Users/UsersContainer";
import {NavContainer} from "./Navbar/NavContainer";
import {Layout} from "antd";
import {Routes} from "../constants/routes";
import styles from "./Content.module.css";
import cn from "classnames";

const {Header, Content, Footer} = Layout;

const DialogsContainer = React.lazy(() => import("./Dialogs/DialogsContainer"));
const News = React.lazy(() => import("./News/News"));
const Music = React.lazy(() => import("./Music/Music"));
const ChatPage = React.lazy(() => import("../pages/Chat"));

interface ContentProps {
    isMobile: boolean;
}

export const ContentComponent: React.FC<ContentProps> = memo(({isMobile}) => {
    return (
        <Layout className={styles.layout}>
            <NavContainer isMobile={isMobile} />
            <Layout className='site-layout' style={{marginLeft: 200, minHeight: "100%"}}>
                <Header className='site-layout-background' style={{padding: 0}}>
                    <HeaderComponent isMobile={isMobile} />
                </Header>
                <Content className={cn("site-layout-background", styles.layoutContent)}>
                    <Suspense fallback={<Preloader />}>
                        <Switch>
                            <Route
                                exact
                                path='/'
                                render={() => <Redirect to={Routes.PROFILE} />}
                            />
                            <Route
                                path={Routes.DIALOGS}
                                render={() => <DialogsContainer isMobile={isMobile} />}
                            />
                            <Route
                                path={Routes.LOGIN}
                                render={() => <Login isMobile={isMobile} />}
                            />
                            <Route
                                path={Routes.PROFILE}
                                render={() => <ProfileContainer isMobile={isMobile} />}
                            />
                            <Route path={Routes.NEWS} component={News} />
                            <Route
                                path={Routes.USERS}
                                render={() => <UsersContainer isMobile={isMobile} />}
                            />
                            <Route path={Routes.MUSIC} component={Music} />
                            <Route
                                path='/friends'
                                render={() => <FriendsContainer isMobile={isMobile} />}
                            />
                            <Route path={Routes.SETTINGS} component={Settings} />
                            <Route path={Routes.CHAT} component={ChatPage} />
                            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
                        </Switch>
                    </Suspense>
                </Content>
                <Footer className={styles.footer}>Social Network ©2020 Created by Bari Vakhidov</Footer>
            </Layout>
        </Layout>
    );
});
