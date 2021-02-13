import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {setNavVisible} from "../../redux/app-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        profile: state.auth.currentUser,
        blackTheme: state.app.blackTheme,
        isVisible: state.app.isVisible
    }
}

export default connect(mapStateToProps, {logout, setNavVisible})(HeaderContainer);
