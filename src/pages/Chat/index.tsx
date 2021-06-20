import React, {FC} from 'react';
import { Chat } from './Chat';
import s from './Chat.module.css';

const ChatPage:FC = React.memo(() => {
    return (
        <div className={s.wrapper}>
            <Chat/>
        </div>
    ) 
});

export default ChatPage;
