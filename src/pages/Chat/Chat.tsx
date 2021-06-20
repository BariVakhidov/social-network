import React, { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    startMessagesListening,
    stopMessagesListening,
} from '../../redux/chat/thunk';
import { StatusType } from '../../redux/chat/types';
import { RootState } from '../../redux/redux-store';
import { AddMessageForm } from './AddMessageForm';
import { Messages } from './Messages';

export const Chat: FC = React.memo(() => {
    const { status } = useSelector((state: RootState) => state.chat);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        };
    }, [dispatch]);
    return (
        <div>
            {status === StatusType.ERROR && (
                <div>Some error occured... Please refresh page</div>
            )}
            <>
                <Messages />
                <AddMessageForm />
            </>
        </div>
    );
});
