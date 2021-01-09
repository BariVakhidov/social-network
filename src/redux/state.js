const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_LIKE = "ADD-LIKE";
const ADD_MESSAGE = "ADD-MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likes: 15},
                {id: 2, message: "It is my firs post", likes: 45},
                {id: 3, message: "Hi, how are you?", likes: 5},
                {id: 4, message: "Hi, how are you?", likes: 15}
            ],
            newPostText: "New post"
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Roman"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "Demin"},
                {id: 4, name: "Ustin"},
                {id: 5, name: "Lera"},
                {id: 6, name: "Valeria"},
                {id: 7, name: "Lerchick"},
            ],

            messagesData: [
                {id: 1, message: "Hi!"},
                {id: 1, message: "How are you?"},
                {id: 3, message: "Nigga"},
                {id: 4, message: "Urot"},
                {id: 1, message: "Kus'"},
                {id: 6, message: "Sup"},
                {id: 1, message: "Yo"},
            ],
            newMessageText: "New message"
        },
        navbar: {
            friends: [
                {
                    id: 1,
                    name: "Roman",
                    imageURL: "https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                },
                {
                    id: 2,
                    name: "Demin",
                    imageURL: "https://cdn.vox-cdn.com/thumbor/QggmlgpTq7ZCI-V9EPCDJzzuADc=/0x0:1205x798/1400x1400/filters:focal(513x122:743x352):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/55474493/Screen_Shot_2017_06_27_at_1.05.21_PM.0.png"
                },
                {
                    id: 3,
                    name: "Lerchick",
                    imageURL: "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=700&quality=85&auto=format&fit=max&s=3d74c30c02485d03b0166f4908ddaa35"
                },
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /* postMessage() {
         let newPost = {
             id: this._state.profilePage.posts.length + 1,
             message: this._state.profilePage.newPostText,
             likes: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = "";
         this._callSubscriber(this._state);
     },*/
    /* updateNewPostMessage(newText) {
         this._state.profilePage.newPostText = newText;
         this._callSubscriber(this._state);
     },*/
    /*updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },*/
    /* addLike(id) {
         this._state.profilePage.posts[id - 1].likes++;
         this._callSubscriber(this._state);
     },*/
    /*addMessage() {
        let newMessage = {
            id: Math.random() * 10,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    },*/

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    message: this._state.profilePage.newPostText,
                    likes: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;
            case ADD_LIKE:
                this._state.profilePage.posts[action.id - 1].likes++;
                this._callSubscriber(this._state);
                break;
            case ADD_MESSAGE:
                let newMessage = {
                    id: Math.floor(Math.random() * 10),
                    message: this._state.dialogsPage.newMessageText
                };
                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.newMessageText = "";
                this._callSubscriber(this._state);
                break;
            default:
                console.log("Nothing happens...")
        }
    }
};

export const addLikeActionCreator = (id) => ({type: ADD_LIKE, id:id});
export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export const updateNewMessageText = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, newText:text});
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text});
export const addPostActionCreator = () => ({type:ADD_POST});

export default store;
window.state = store.getState().dialogsPage.messagesData;
