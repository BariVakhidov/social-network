import React, { FC } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AddMessageForm } from './AddMessageForm';
import { Message, Messages } from './Messages';

export const webSocket = new WebSocket(
  'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
);

export const Chat: FC = React.memo(() => {
    
  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    webSocket.addEventListener('message', (e: MessageEvent) => {
      setMessages((prevState) => [...prevState, ...JSON.parse(e.data)]);
    });
  }, []);

  return (
    <div>
      <Messages messages={messages} />
      <AddMessageForm />
    </div>
  );
});
