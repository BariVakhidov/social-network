import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setCurrentUser, setUserData} from "../../redux/auth-reducer";
import {loginAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        loginAPI.login().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setUserData(id, login, email);
                profileAPI.getProfile(id).then(response => {
                    this.props.setCurrentUser(response.data);
                });
            }

        });
    }

    render() {
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.auth.currentUser
    }
}

export default connect(mapStateToProps, {setUserData, setCurrentUser})(HeaderContainer);
