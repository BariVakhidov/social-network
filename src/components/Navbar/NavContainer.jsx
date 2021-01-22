import React from "react"
import {connect} from "react-redux";
import Nav from "./Nav";
import {setFriends} from "../../redux/navbar-reducer";
import {friendsAPI} from "../../api/api";

class NavContainer extends React.Component {
    componentDidMount() {
        friendsAPI.displayFriends().then(data => {
            this.props.setFriends(data.items);
        });
    };

    render() {
        return <Nav {...this.props}/>
    };
}

let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    };
};

export default connect(mapStateToProps, {setFriends})(NavContainer);
