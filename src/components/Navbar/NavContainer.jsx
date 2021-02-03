import React from "react"
import {connect} from "react-redux";
import Nav from "./Nav";
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
        friends: state.usersPage.showingFriends,
        friendsCount: state.usersPage.totalFriends,
    };
};

export default connect(mapStateToProps, {})(NavContainer);
