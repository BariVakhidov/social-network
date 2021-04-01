import {
    sendMessage, setCurrentChatFriendsPage
} from "../../redux/dialogs/action-creators";
import {getChatFriends} from '../../redux/dialogs/thunk'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        blackTheme: state.app.blackTheme,
        chatFriends: state.dialogsPage.chatFriends,
        currentChatFriendsPage:state.dialogsPage.currentChatFriendsPage,
        currentUser: state.auth.currentUser
    };
};

export default compose(connect(mapStateToProps, {sendMessage,getChatFriends,setCurrentChatFriendsPage}),withAuthRedirect)(Dialogs);
