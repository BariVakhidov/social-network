import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setCurrentUser, setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, {setUserData, setCurrentUser,getAuthUserData,logout})(HeaderContainer);
