import { combineReducers } from '@reduxjs/toolkit'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import { combineSagas, createAsyncActions } from '../lib'
import global from './global'
import member from './member'

export default {
    rootReducer: (history: History<any>) =>
        combineReducers({
            router: connectRouter(history),
            member: member.reducer,
            global: global.reducer,
        }),
    rootSaga: combineSagas({
        global: global.saga,
        member: member.saga,
    }),
}
