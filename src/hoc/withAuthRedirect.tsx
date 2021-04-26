import React from "react";
import {Redirect} from "react-router";
import {useSelector} from "react-redux";
import {RootState} from "../redux/redux-store";

export function withAuthRedirect <T> (Component: React.ComponentType<T>) {
    const RedirectComponent:React.FC<T> = (props) => {
        const isAuth = useSelector((state:RootState) => state.auth.isAuth);
        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...props}/>
    }

    return RedirectComponent;
}
