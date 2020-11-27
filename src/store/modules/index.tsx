import { combineReducers } from '@reduxjs/toolkit'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import { combineSagas, createAsyncActions } from '../lib'
import global from './global'

export default {
    rootReducer: (history: History<any>) =>
        combineReducers({
            router: connectRouter(history),
            global: global.reducer,
        }),
    rootSaga: combineSagas({
        global: global.saga,
    }),
}
