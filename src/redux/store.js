import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likes: 15},
                {id: 2, message: "It is my firs post", likes: 45},
                {id: 3, message: "Hi, how are you?", likes: 5},
                {id: 4, message: "Hi, how are you?", likes: 15}
            ],
            newPostText: ""
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
                {id: 2, message: "How are you?"},
                {id: 3, message: "Nigga"},
                {id: 4, message: "Urot"},
                {id: 5, message: "Kus'"},
                {id: 6, message: "Sup"},
                {id: 7, message: "Yo"},
            ],
            newMessageText: ""
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action);
        this._state.navbar = navbarReducer(this._state.navbar,action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.state = store.getState().dialogsPage.messagesData;
