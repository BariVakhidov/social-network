import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfilePage, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getProfilePage(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

export default compose(connect(mapStateToProps, {setUserProfile, getProfilePage}),withRouter, withAuthRedirect)(ProfileContainer);

