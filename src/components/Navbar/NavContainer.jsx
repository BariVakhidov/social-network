import React from "react"
import {connect} from "react-redux";
import Nav from "./Nav";
import {isBlackTheme} from "../../redux/app-reducer";

class NavContainer extends React.Component {

    render() {
        return <Nav {...this.props}/>
    };
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        friends: state.usersPage.showingFriends,
        friendsCount: state.usersPage.totalFriends,
        blackTheme: state.app.blackTheme,
        isVisible: state.app.isVisible
    };
};

export default connect(mapStateToProps, {isBlackTheme})(NavContainer);
