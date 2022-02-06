import React, {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import styles from "./App.module.css";
import {Provider, useDispatch, useSelector} from "react-redux";
import {initializeApp} from "../redux/app-reducer";
import Preloader from "../components/common/Preloader/Preloader";
import store, {RootState} from "../redux/redux-store";
import {ContentComponent} from "../components/ContentWithResponsive";
import {BlackThemeContext} from '../contexts/theme-context';
import {useMediaQuery} from "react-responsive";

const App: React.FC = () => {
    const isDesktop: boolean = useMediaQuery({ query: '(min-width: 768px)' });
    const {initialized, blackTheme} = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!initialized) return <div className={styles.preloaderWrapper}><Preloader /></div>

    return (
        <BlackThemeContext.Provider value={blackTheme}>
            <ContentComponent isMobile={!isDesktop} />
        </BlackThemeContext.Provider>
    )
}

const SocialNetworkApp: React.FC = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
};
export default SocialNetworkApp;
