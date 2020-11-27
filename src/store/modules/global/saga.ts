import { all, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SHOW_DIALOG, LOADING_START, LOADING_END } from './reducer'

function* handleRequest$(action: any) {
    if (action.meta) {
        yield put(LOADING_START(action.meta))
    } else {
        yield put(LOADING_START(''))
    }
}

function* handleFailure$(action: { payload: any }) {
    const { payload } = action
    if (payload.response && payload.response.status >= 500) {
        yield put(SHOW_DIALOG('알 수 없는 서버오류가 발생했습니다.'))
    }
    yield put(LOADING_END())
}

function* handleSuccess$(action: { payload: any }) {
    const { payload } = action
    yield put(LOADING_END())
}

export default [
    takeEvery((action: any) => {
        return action.type.endsWith('_FAILURE')
    }, handleFailure$),
    takeEvery((action: any) => {
        return action.type.endsWith('_REQUEST')
    }, handleRequest$),
    takeEvery((action: any) => {
        return action.type.endsWith('_SUCCESS')
    }, handleSuccess$),
]