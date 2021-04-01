import profileReducer, {addPostAC, deletePost} from "../action-creators";

let initialState = {
    posts: [
        {
            id: 1,
            name: "Roman",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Ok, see you",
            likesCount: 5
        },
        {
            id: 2,
            name: "Andrew",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Hey",
            likesCount: 6
        },
        {
            id: 3,
            name: "Demin",
            userImage: "https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201609/a_ov_Pepe_160928.focal-760x428.jpg",
            postText: "Nigga",
            likesCount: 1
        },
    ]
}

it('length of posts should be incremented',  () => {
    //action
    let newState = profileReducer(initialState,addPostAC("sup"));

    //expectation
    expect(newState.posts.length).toBe(4);
});

it('post message is correct',  () => {
    //action
    let newState = profileReducer(initialState,addPostAC("sup"));

    //expectation
    expect(newState.posts[3].postText).toBe("sup");
});

it('after deleting length of posts should be decremented',  () => {
    //action
    let newState = profileReducer(initialState,deletePost(1));

    //expectation
    expect(newState.posts.length).toBe(2);
});

it(`after deleting length of posts shouldn't be decremented if postId is incorrect`,  () => {
    //action
    let newState = profileReducer(initialState,deletePost(99));

    //expectation
    expect(newState.posts.length).toBe(3);
});