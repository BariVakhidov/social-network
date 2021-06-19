import React, { FC } from 'react';
import { Message } from './Messages';
import s from './Chat.module.css';

interface Props {
  message: Message;
}

export const MessageItem: FC<Props> = React.memo(({ message }) => {
  return (
    <div className={s.message}>
      <div className={s.userInfo}>
        <img src={message.photo} alt="avatar" height={40}/>
        <span>{message.userName}</span>
      </div>
      <div>{message.message}</div>
    </div>
  );
});
