import React from "react"
import {connect} from "react-redux";
import Nav from "./Nav";
import {setFriends, showingFriends} from "../../redux/navbar-reducer";

class NavContainer extends React.Component {
    componentDidMount() {
        this.props.showingFriends();
    };

    render() {
        return <Nav {...this.props}/>
    };
}

let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends,
        friendsCount: state.navbar.friendsCount
    };
};

export default connect(mapStateToProps, {setFriends, showingFriends})(NavContainer);
