import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setCurrentUser, setUserData} from "../../redux/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setUserData(id, login, email);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ id).then(response => {
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
