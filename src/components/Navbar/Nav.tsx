import React, {memo} from "react";
import s from "./Nav.module.css";
import {NavLink, useLocation} from "react-router-dom";
import PartOfFriends, {PartOfFriendsProps} from "./PartOfFriends";
import carrot from "../../assets/images/carrot.jpg"
import Switcher from "./Switcher";
import {Layout, Menu} from "antd";
import {
    UserOutlined,
    TeamOutlined,
    MessageOutlined,
    SettingOutlined,
    CustomerServiceFilled,
    ProfileOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import {Routes} from "../../constants/routes";

const {Sider} = Layout;

interface Props extends PartOfFriendsProps {
    blackTheme: boolean;
    isMobile: boolean;
    isVisible: boolean;
    isBlackTheme: (checked: boolean) => void;
}

const Nav: React.FC<Props> = memo(({
                                       blackTheme,
                                       isMobile,
                                       isBlackTheme,
                                       friends,
                                       isAuth,
                                       friendsCount,
                                   }) => {
    const location = useLocation();
    return (
        <>
            <Sider style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
            }}>
                <div className={s.logo}>
                    <img
                        alt='img'
                        src={carrot} />
                    <b>Carrot</b>
                </div>
                <Menu theme='dark' mode='inline' defaultSelectedKeys={[location.pathname]}>
                    <Menu.Item key={Routes.PROFILE_MAIN} icon={<UserOutlined />}>
                        <NavLink to={Routes.PROFILE_MAIN}>
                            Profile
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key={Routes.DIALOGS} icon={<MessageOutlined />}>
                        <NavLink to={Routes.DIALOGS}>
                            Messages
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key={Routes.CHAT} icon={<MessageOutlined />}>
                        <NavLink to={Routes.CHAT}>
                            Chat
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key={Routes.NEWS} icon={<ProfileOutlined />}>
                        <NavLink to={Routes.NEWS}>
                            News
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key={Routes.USERS} icon={<UsergroupAddOutlined />}>
                        <NavLink to={Routes.USERS}>
                            Users
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key={Routes.MUSIC} icon={<CustomerServiceFilled />}>
                        <NavLink to={Routes.MUSIC}>
                            Music
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key={Routes.SETTINGS} icon={<SettingOutlined />}>
                        <NavLink to={Routes.SETTINGS}>
                            Settings
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='/friends' icon={<TeamOutlined />}>
                        <NavLink to='/friends'>
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
});

export default Nav;
