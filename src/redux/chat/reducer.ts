import { Reducer } from 'redux';
import { CharReducerActions } from './action-creators';
import { ChatActions } from './constants';
import { ChatState, StatusType } from './types';

let initialState: ChatState = {
    messages: [],
    status: StatusType.PENDING,
};

export const chatReducer: Reducer<ChatState, CharReducerActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ChatActions.MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload].filter(
                    (m, index, array) => index >= array.length - 100
                ),
            };
        case ChatActions.STATUS_CHANGED:
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};
