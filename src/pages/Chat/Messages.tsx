import React, { FC } from 'react';
import { MessageItem } from './MessageItem';
import s from './Chat.module.css';

export interface Message {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

interface Props {
    messages: Message[];
}

export const Messages: FC<Props> = React.memo(({messages}) => {
  return <div className={s.messages}>
      {messages.map((message, index) => <MessageItem key={index} message={message}/>)}
  </div>;
});
