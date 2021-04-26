import {setCurrentChatFriendsPage} from "../../redux/dialogs/action-creators";
import {getChatFriends} from '../../redux/dialogs/thunk'
import {Dialogs} from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React, {useCallback} from "react";
import {RootState} from "../../redux/redux-store";
import {Props} from "../Profile/ProfileContainer";

const DialogsContainer:React.FC<Props> = ({isMobile}) => {
    const {chatFriends,currentChatFriendsPage, messagesData} = useSelector((state:RootState) => state.dialogsPage);
    const blackTheme = useSelector((state:RootState) => state.app.blackTheme);
    const {currentUser, isAuth} = useSelector((state:RootState) => state.auth);
    const dispatch = useDispatch();

    const onGetChatFriends = useCallback((page:number) => dispatch(getChatFriends(page)),[dispatch]);

    const onSetCurrentChatFriendsPage = useCallback((page:number) => dispatch(setCurrentChatFriendsPage(page)),[dispatch]);

    return <Dialogs
        chatFriends={chatFriends}
        currentChatFriendsPage={currentChatFriendsPage}
        getChatFriends={onGetChatFriends}
        setCurrentChatFriendsPage={onSetCurrentChatFriendsPage}
        isMobile={isMobile}
        isAuth={isAuth}
        messagesData={messagesData}
        blackTheme={blackTheme}
        currentUser={currentUser}/>
}
export default withAuthRedirect(DialogsContainer);
