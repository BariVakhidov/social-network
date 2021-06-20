import React, { FC, RefObject, useRef, useState } from 'react';
import { MessageItem } from './MessageItem';
import s from './Chat.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';

export const Messages: FC = React.memo(() => {
    const { messages } = useSelector((state: RootState) => state.chat);
    const ref: RefObject<HTMLDivElement> = useRef(null);
    const [isAutoScroll, setIsAutoScroll] = useState(false);
    const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (
            Math.abs(
                element.scrollHeight - element.scrollTop - element.clientHeight
            ) < 300
        ) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll(false);
        }
    };
    useEffect(() => {
        if (isAutoScroll) ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isAutoScroll]);
    return (
        <div className={s.messages} onScroll={onScrollHandler}>
            {messages.map((message, index) => (
                <MessageItem key={index} message={message} />
            ))}
            <div ref={ref} />
        </div>
    );
});
