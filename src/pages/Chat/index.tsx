import React, {FC} from 'react';
import { Chat } from './Chat';
import s from './Chat.module.css';

export const ChatPage:FC = React.memo(() => {
    return (
        <div className={s.wrapper}>
            <Chat/>
        </div>
    ) 
})
