import { User } from "../../types/intefaces";
import { Actions } from "./constants";

interface FollowSuccessAction {
    type: typeof Actions.FOLLOW
    userId: number
}

interface UnfollowSuccessAction {
    type: typeof Actions.UNFOLLOW
    userId: number
}

interface SetUsersAction {
    type: typeof Actions.SET_USERS
    users: Array<User>
}

interface SetFriends {
    type: typeof Actions.SET_FRIENDS
    friends: Array<User>
}

interface SetShowingFriends {
    type: typeof Actions.SET_SHOWING_FRIENDS
    friends: Array<User>
}

interface SetPage {
    type: typeof Actions.SET_PAGE
}

interface SetCurrentPage {
    type: typeof Actions.SET_CURRENT_PAGE
    pageNumber: number
}

interface SetFriendsCurrentPage {
    type: typeof Actions.SET_FRIENDS_CURRENT_PAGE,
    pageNumber: number
}

interface SetTotalUsers {
    type: typeof Actions.SET_TOTAL_USERS,
    totalUsers: number
}

interface SetTotalFriends {
    type: typeof Actions.SET_TOTAL_FRIENDS,
    totalFriends: number
}

interface ToggleIsFetching {
    type: typeof Actions.TOGGLE_IS_FETCHING,
    isFetching: boolean
}

interface ToggleFollowingProgress {
    type: typeof Actions.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}

export type UsersReducerActions = FollowSuccessAction | UnfollowSuccessAction | SetUsersAction
    | SetFriends
    | SetCurrentPage
    | SetFriendsCurrentPage
    | SetPage
    | SetShowingFriends
    | SetTotalFriends
    | ToggleIsFetching
    | SetTotalUsers
    | ToggleFollowingProgress;