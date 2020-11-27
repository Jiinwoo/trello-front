import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import modules from './modules'
import {createDispatchHook, createSelectorHook} from 'react-redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware(), sagaMiddleware, routerMiddleware(history)]

export const rootReducer = modules.rootReducer(history)

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    // enhancers: [sentryReduxEnhancer],
})

sagaMiddleware.run(modules.rootSaga)

export type RootState = ReturnType<typeof rootReducer>

export const useTypedDispatch = createDispatchHook<RootState>()
export const useTypedSelector = createSelectorHook<RootState>()

export default store
