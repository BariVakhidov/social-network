import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {
    addLike,
    addMessage,
    postMessage,
    subscriber,
    updateNewMessageText,
    updateNewPostMessage
} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     postMessage={postMessage}
                     updatePostMessage={updateNewPostMessage}
                     addMessage={addMessage}
                     updateMessageText={updateNewMessageText}
                     addLike={addLike}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(state);

subscriber(renderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
