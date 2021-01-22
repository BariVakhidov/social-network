import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, setCurrentUser, setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
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

export default connect(mapStateToProps, {setUserData, setCurrentUser,auth})(HeaderContainer);
