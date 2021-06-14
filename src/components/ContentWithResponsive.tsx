import React, { Suspense, useState } from 'react';
import Preloader from './common/Preloader/Preloader';
import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Login from './Login/Login';
import ProfileContainer from './Profile/ProfileContainer';
import FriendsContainer from './Friends/Friends';
import Settings from './Settings/Settings';
import { useMediaQuery } from 'react-responsive';
import { HeaderContainer } from './Header/HeaderContainer';
//import s from './Content.module.css';
import cn from 'classnames';
import { BlackThemeContext } from '../contexts/theme-context';
import { UsersContainer } from './Users/UsersContainer';
import { NavContainer } from './Navbar/NavContainer';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./News/News'));
const Music = React.lazy(() => import('./Music/Music'));

interface Props {
  blackTheme: boolean;
}

const ContentWithResponsive: React.FC<Props> = ({ blackTheme }) => {
  const isDesktop: boolean = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <BlackThemeContext.Provider value={blackTheme}>
        {isDesktop ? (
          <ContentComponent isMobile={false} />
        ) : (
          <ContentComponent isMobile={true} />
        )}
      </BlackThemeContext.Provider>
    </>
  );
};
export default ContentWithResponsive;

interface ContentProps {
  isMobile: boolean;
}

const ContentComponent: React.FC<ContentProps> = ({ isMobile }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((prev) => !prev);
  return (
    <>
      <BlackThemeContext.Consumer>
        {(value) => (
          <Layout>
              <NavContainer isMobile={isMobile} collapsed={collapsed}/>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <HeaderContainer isMobile={isMobile} />
            </Header>
            
            <Content 
                style={{ margin: '24px 16px 0', overflow: 'initial' }}
            >
              <Suspense fallback={<Preloader />}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to={'/profile'} />}
                  />
                  <Route
                    path="/dialogs"
                    render={() => <DialogsContainer isMobile={isMobile} />}
                  />
                  <Route
                    path="/login"
                    render={() => <Login isMobile={isMobile} />}
                  />
                  <Route
                    path="/profile/:userId?"
                    render={() => <ProfileContainer isMobile={isMobile} />}
                  />
                  <Route path="/news" component={News} />
                  <Route
                    path="/users/:friends?"
                    render={() => <UsersContainer isMobile={isMobile} />}
                  />
                  <Route path="/music" component={Music} />
                  <Route
                    path="/friends"
                    render={() => <FriendsContainer isMobile={isMobile} />}
                  />
                  <Route path="/settings" component={Settings} />
                  <Route
                    path="*"
                    render={() => <div>404 NOT FOUND</div>}
                  />
                </Switch>
              </Suspense>
            </Content>
            </Layout>
          </Layout>
        )}
      </BlackThemeContext.Consumer>
    </>
  );
};
