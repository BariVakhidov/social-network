import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import PartOfFriends, { PartOfFriendsProps } from './PartOfFriends';
import carrot from '../../assets/images/carrot.jpg'
import cn from 'classnames';
import Switcher from './Switcher';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  TeamOutlined,
  UploadOutlined,
  MessageOutlined,
  SettingOutlined,
  CustomerServiceFilled,
  ProfileOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Routes } from '../../constants/routes';

const { Sider } = Layout;
interface Props extends PartOfFriendsProps {
  blackTheme: boolean;
  isMobile: boolean;
  isVisible: boolean;
  isBlackTheme: (checked: boolean) => void;
  collapsed: boolean;
}

const Nav: React.FC<Props> = ({
  blackTheme,
  isMobile,
  isBlackTheme,
  isVisible,
  friends,
  isAuth,
  friendsCount,
  collapsed,
}) => {
  return (
    <>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}>
         <div className={s.logo}>
                    <img
                        alt="img"
                        src={carrot}/>
                    <div>Carrot</div>
                </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to={Routes.PROFILE }>
              Profile
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<MessageOutlined />}>
            <NavLink to={Routes.DIALOGS}>
              Messages
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<MessageOutlined />}>
            <NavLink to={Routes.CHAT}>
              Chat
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<ProfileOutlined />}>
            <NavLink to={Routes.NEWS}>
              News
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5" icon={<UsergroupAddOutlined />}>
            <NavLink to={Routes.USERS}>
              Users
            </NavLink>
          </Menu.Item>
          <Menu.Item key="6" icon={<CustomerServiceFilled />}>
            <NavLink to={Routes.MUSIC}>
              Music
            </NavLink>
          </Menu.Item>
          <Menu.Item key="7" icon={<SettingOutlined />}>
            <NavLink to={Routes.SETTINGS}>
              Settings
            </NavLink>
          </Menu.Item>
          <Menu.Item key="8" icon={<TeamOutlined />}>
            <NavLink to="/friends">
              Friends
            </NavLink>
          </Menu.Item>
          <PartOfFriends
            friends={friends}
            friendsCount={friendsCount}
            isAuth={isAuth}
          />
          <Switcher
            isMobile={isMobile}
            blackTheme={blackTheme}
            isBlackTheme={isBlackTheme}
          />
        </Menu>
      </Sider>
    </>
  );
};

export default Nav;
