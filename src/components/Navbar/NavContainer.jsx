import React from "react"
import {connect} from "react-redux";
import Nav from "./Nav";
import {showingFriends} from "../../redux/navbar-reducer";

class NavContainer extends React.Component {
    componentDidMount() {
    };

    render() {
        return <Nav {...this.props}/>
    };
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        friends: state.navbar.friends,
        friendsCount: state.navbar.friendsCount,
    };
};

export default connect(mapStateToProps, {showingFriends})(NavContainer);
