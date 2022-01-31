import {all, call, put, takeLatest} from "redux-saga/effects";
import {ProfileActions} from "./constants";
import {tryCatchSaga} from "../sagas";
import {profileActions} from "./action-creators";
import {Profile} from "../../types/intefaces";
import {profileAPI} from "../../api/profile-api";
import {UpdatePhoto, UpdateStatus} from "../../api/response-types";
import {setCurrentUserPhotos} from "../auth-reducer";

const tryCatchSagaOptions = {
    withProgress: true,
    updateProgressAction: profileActions.setFetching,
}

function* getProfile(action: ReturnType<typeof profileActions.getUserProfile>) {
    const profile: Profile = yield call(profileAPI.getProfile, action.payload);
    const status: string = yield call(profileAPI.getStatus, action.payload);
    yield put(profileActions.setUserProfile(profile));
    yield put(profileActions.setStatus(status));
}

function* updateStatus(action: ReturnType<typeof profileActions.updateStatus>) {
    const data: UpdateStatus = yield call(profileAPI.updateStatus, action.payload);
    yield put(profileActions.setStatus(action.payload));
}

function* updateProfile(action: ReturnType<typeof profileActions.updateProfile>) {
    const data: UpdateStatus = yield call(profileAPI.updateProfile, action.payload.profileData);
    const profile: Profile = yield call(profileAPI.getProfile, action.payload.userId);
    yield put(profileActions.setUserProfile(profile));
}

function* savePhoto(action: ReturnType<typeof profileActions.savePhoto>) {
    const response: UpdatePhoto = yield call(profileAPI.savePhoto, action.payload);
    yield put(profileActions.savePhotoSuccess(response.data.photos));
    yield put(setCurrentUserPhotos(response.data.photos));
}

export function* profileSaga() {
    yield all([
        takeLatest(ProfileActions.GET_PROFILE, tryCatchSaga(getProfile, tryCatchSagaOptions)),
        takeLatest(ProfileActions.UPDATE_STATUS, tryCatchSaga(updateStatus, tryCatchSagaOptions)),
        takeLatest(ProfileActions.UPDATE_PROFILE, tryCatchSaga(updateProfile, tryCatchSagaOptions)),
        takeLatest(ProfileActions.SAVE_PHOTO, tryCatchSaga(savePhoto, tryCatchSagaOptions)),
    ])
}
