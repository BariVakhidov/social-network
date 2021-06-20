import { Message } from '../../api/chat-api';

export interface ChatState {
    messages: Message[];
    status: StatusType;
}

export enum StatusType {
    PENDING = 'PENDING',
    READY = 'READY',
    ERROR = 'ERROR',
}
