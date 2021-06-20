import React, { FC } from 'react';
import { Message } from '../../api/chat-api';
import s from './Chat.module.css';

interface Props {
  message: Message;
}

export const MessageItem: FC<Props> = React.memo(({ message }) => {
  return (
    <div className={s.messageItem}>
      <div className={s.userInfo}>
        <img src={message.photo} alt="avatar" className={s.avatar} />
        <span>{message.userName}</span>
      </div>
      <div className={s.message}>
        <span>{message.message}</span>
      </div>
    </div>
  );
});
