import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfilePage, getStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.mainUserId;
        this.props.getProfilePage(userId);
        this.props.getStatus(userId);
    };
    render() {
        return (
            <Profile {...this.props} updateStatus={this.props.updateStatus} />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        mainUserId: state.auth.userId
    }
};

export default compose(connect(mapStateToProps, {setUserProfile, getProfilePage, getStatus,updateStatus}),withRouter, withAuthRedirect)(ProfileContainer);

