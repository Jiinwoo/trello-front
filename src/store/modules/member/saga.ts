import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { authActions, createMemberActions } from './reducer'
import { authAPI, createMemberAPI } from '../../../api/member'
import { history } from '../../index'

function* createMember$(
    action: ReturnType<typeof createMemberActions.REQUEST>,
) {
    try {
        const result = yield call(createMemberAPI, action.payload)
        yield put(createMemberActions.SUCCESS(result))
        history.push('/login')
    } catch (e) {
        yield put(createMemberActions.FAILURE(e))
    }
}
function* auth$(action: ReturnType<typeof authActions.REQUEST>) {
    try {
        const result = yield call(authAPI, action.payload)
        console.log(result, 'adwads')
        yield put(authActions.SUCCESS(result))
        history.push('/')
    } catch (e) {
        yield put(authActions.FAILURE(e))
    }
}

export default [
    takeLatest(createMemberActions.REQUEST, createMember$),
    takeLatest(authActions.REQUEST, auth$),
]
