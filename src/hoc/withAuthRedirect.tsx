import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {RootState} from "../redux/redux-store";

let mapStateToPropsForRedirect = (state:RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
};
interface Props {
    isAuth: boolean;
}
export const withAuthRedirect = (Component:typeof React.Component) => {
    class RedirectComponent extends React.Component<Props> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        };
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
