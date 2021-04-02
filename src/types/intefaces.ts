export interface Contacts {
    github: (string);
    vk: (string);
    facebook: (string);
    instagram: (string);
    twitter: (string);
    website: (string);
    youtube: (string);
    mainLink: (string);
}

export interface Profile {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    contacts: Contacts;
    photos: Photos;
}
export interface ProfileData {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    contacts: Contacts;
}
export interface Message {
    id: number;
    message: string;
}

export interface DialogsReducer {
    messagesData: Array<Message>
    chatFriends: Array<User>,
    currentChatFriendsPage: number
}
export interface AuthReducer {
    userId: number | null;
    login: null | string;
    email: null | string;
    isAuth: boolean;
    currentUser: Profile | null,
    captchaURL: null | string
}

export interface Post {
    id: number;
    name: string;
    userImage: string;
    postText: string;
    likesCount: number;
}

export interface ProfileReducer {
    posts: Array<Post>;
    profile: Profile | null;
    status: string;
    showingUserId: null | number;
}

export interface AppReducer {
    initialized: boolean;
    blackTheme: boolean;
    isVisible: boolean;
}

export interface Photos {
    small: string;
    large: string;
}

export interface User {
    id: number;
    name: string;
    status: null | string;
    photos: Photos;
    followed: boolean;
}

export interface UsersState {
    users: Array<User>;
    friends: Array<User>;
    totalUsers: number;
    totalFriends: number;
    pageSize: number;
    currentPage: number;
    friendsCurrentPage: number;
    isFetching: boolean;
    followingProgress: Array<number>;
    showingFriends: Array<User>;
}
export interface LoginData {
    email:string;
    password:string;
    rememberMe?:boolean;
    captcha?:string;
}