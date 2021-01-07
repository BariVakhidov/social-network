
let renderEntireTree = () => {

};

export let subscriber = (observer) => {
    renderEntireTree = observer;
}

let state = {
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
};

export let postMessage = () => {
    let newPost = {
        id:5,
        message:state.profilePage.newPostText,
        likes:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText="";
    renderEntireTree(state);
};

export let updateNewPostMessage = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireTree(state);
};

export let addLike = (id) => {
    state.profilePage.posts[id-1].likes++;
    renderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
        id: 1,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = "";
    renderEntireTree(state);
};

export default state;