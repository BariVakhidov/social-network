import { Message } from "../../api/chat-api";
import { InferActionsType } from "../redux-store";
import { ChatActions } from "./constants";
import { StatusType } from "./types";

export type CharReducerActions = InferActionsType<typeof chatActions>


export const chatActions = {
     messagesReceived: (payload: Message[]) => ({
         type: ChatActions.MESSAGES_RECEIVED,
         payload
     } as const),

     statusChanged: (payload: StatusType) => ({
        type: ChatActions.STATUS_CHANGED,
        payload
    } as const),
}