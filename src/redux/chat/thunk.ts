import { AppDispatch } from './../redux-store';
import { chatAPI, EventsNames, Message } from '../../api/chat-api';
import { AppThunk } from '../redux-store';
import { chatActions } from './action-creators';
import { StatusType } from './types';

let _newMessageHandler: ((messages: Message[]) => void) | null = null;
let _changeStatusHandler: ((status: StatusType) => void) | null = null;

const changeStatusHandlerCreator = (dispatch: AppDispatch) => {
    if (_changeStatusHandler === null) {
        _changeStatusHandler = (status: StatusType) => {
            dispatch(chatActions.statusChanged(status));
        };
    }
    return _changeStatusHandler;
};

const newMessageHandlerCreator = (dispatch: AppDispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: Message[]) => {
            dispatch(chatActions.messagesReceived(messages));
        };
    }
    return _newMessageHandler;
};

export const startMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe({
        eventType: EventsNames.STATUS_CHANGED,
        callback: changeStatusHandlerCreator(dispatch),
    });
    chatAPI.subscribe({
        eventType: EventsNames.MESSAGES_RECEIVED,
        callback: newMessageHandlerCreator(dispatch),
    });
};

export const stopMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe({
        eventType: EventsNames.MESSAGES_RECEIVED,
        callback: newMessageHandlerCreator(dispatch),
    });
    chatAPI.unsubscribe({
        eventType: EventsNames.STATUS_CHANGED,
        callback: changeStatusHandlerCreator(dispatch),
    });
    chatAPI.stop();
};

export const sendMessage =
    (message: string): AppThunk =>
    async (dispatch) => {
        chatAPI.sendMessage(message);
    };
