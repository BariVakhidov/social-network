import {RootState} from "./redux-store";
import {AnyAction} from "redux";
import {call, put, fork} from "redux-saga/effects";
import {profileSaga} from "./profile/sagas";


export function* rootSaga() {
    yield fork(profileSaga);
}

/**
 *
 * @param saga
 * @param options
 */

export function tryCatchSaga<A, K extends keyof RootState>(
    saga: (a: A, s?: RootState[K]) => void,
    options?: { withProgress: boolean; withStore?: K; updateProgressAction: (payload: boolean) => AnyAction }
) {
    return function* (a: A) {
        try {
            if (options?.withProgress) {
                yield put(options.updateProgressAction(true));
            }
            yield call(saga, a);
        } catch (error) {
            console.log(error)
            //TODO: set error message into app state
        } finally {
            if (options?.withProgress) {
                yield put(options.updateProgressAction(false));
            }
        }
    };
}
