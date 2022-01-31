import { StatusType } from '../redux/chat/types';

export enum EventsNames {
    MESSAGES_RECEIVED = 'MESSAGES_RECEIVED',
    STATUS_CHANGED = 'STATUS_CHANGED',
}

interface MessagesReceived {
    eventType: EventsNames.MESSAGES_RECEIVED;
    callback: MessagesReceivedSubscriberType;
}

interface StatusChanged {
    eventType: EventsNames.STATUS_CHANGED;
    callback: StatusChangedSubscriberType;
}
type SubscribeParams = MessagesReceived | StatusChanged;

const subscribers = {
    MESSAGES_RECEIVED: [] as MessagesReceivedSubscriberType[],
    STATUS_CHANGED: [] as StatusChangedSubscriberType[],
};

let ws: WebSocket | null = null;

const closeHandler = () => {
    notifySubsAboutStatus(StatusType.PENDING);
    setTimeout(createChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers[EventsNames.MESSAGES_RECEIVED].forEach((s) => s(newMessages));
};

const openHandler = () => {
    notifySubsAboutStatus(StatusType.READY);
};

const errorHandler = () => {
    notifySubsAboutStatus(StatusType.ERROR);
};

const cleanUp = () => {
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('open', openHandler);
    ws?.removeEventListener('error', errorHandler);
};

const notifySubsAboutStatus = (status: StatusType) => {
    subscribers['STATUS_CHANGED'].forEach((s) => s(status));
};

const createChannel = () => {
    cleanUp();
    ws?.close();
    ws = new WebSocket(
        'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
    );
    notifySubsAboutStatus(StatusType.PENDING);
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
};

export const chatAPI = {
    start() {
        createChannel();
    },

    stop() {
        subscribers[EventsNames.MESSAGES_RECEIVED] = [];
        subscribers[EventsNames.STATUS_CHANGED] = [];
        cleanUp();
        ws?.close();
    },

    subscribe(params: SubscribeParams) {
        switch (params.eventType) {
            case EventsNames.MESSAGES_RECEIVED:
                subscribers[params.eventType].push(params.callback);
                break;
            case EventsNames.STATUS_CHANGED:
                subscribers[params.eventType].push(params.callback);
                break;
            default:
                return;
        }
    },

    unsubscribe(params: SubscribeParams) {
        switch (params.eventType) {
            case EventsNames.MESSAGES_RECEIVED:
                subscribers[params.eventType] = subscribers[
                    params.eventType
                ].filter((s) => s !== params.callback);
                break;
            case EventsNames.STATUS_CHANGED:
                subscribers[params.eventType] = subscribers[
                    params.eventType
                ].filter((s) => s !== params.callback);
                break;
            default:
                return;
        }
    },

    sendMessage(message: string) {
        ws?.send(message);
    },
};

export interface Message {
    message: string;
    photo: string;
    userId: number;
    userName: string;
}

type MessagesReceivedSubscriberType = (messages: Message[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;
