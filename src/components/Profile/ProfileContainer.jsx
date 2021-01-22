import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        profileAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
let WithRouterProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    setUserProfile
})(WithRouterProfileContainer);