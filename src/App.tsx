import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import "./App.css";
import {Provider, useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {RootState} from "./redux/redux-store";
import ContentWithResponsive from "./components/ContentWithResponsive";

const App:React.FC = () => {

    const {initialized, blackTheme} = useSelector((state:RootState) => state.app);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!initialized) return <Preloader/>

    return (
        <>
            <ContentWithResponsive blackTheme={blackTheme} />
        </>
    )
}

const SocialNetworkApp:React.FC = () => {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
};
export default SocialNetworkApp;
