import { ForkEffect, call, put } from 'redux-saga/effects'
import { createAction, PayloadActionCreator, PrepareAction } from '@reduxjs/toolkit'


export const createAsyncActions = <R, S, F>(prefix: string) => {
    return {
        REQUEST: createAction(prefix + '_REQUEST', function prepare(
            payload: R,
            loadingMessage?: string | number,
            params?: { [key: string]: any },
            pathVariables?: { [key: string]: any },
        ) {
            return {
                payload: payload,
                meta: {
                    pathVariables,
                    params,
                    loadingMessage,
                },
            }
        }),
        SUCCESS: createAction(prefix + '_SUCCESS', function prepare(
            payload: S,
            loadingMessage?: string | number,
            params?: { [key: string]: any },
            pathVariables?: { [key: string]: any },
        ) {
            return {
                payload: payload,
                meta: {
                    pathVariables,
                    params,
                    loadingMessage,
                },
            }
        }),
        FAILURE: createAction<F>(prefix + '_FAILURE'),
    }
}

export type PromiseCreatorFunction<P, T> = ((payment: P) => Promise<T>) | (() => Promise<T>)

export function createAsyncSaga<RequestPayload, SuccessPayload, FailurePayload>(
    asyncActions: {
        REQUEST: PrepareAction<RequestPayload>
        SUCCESS: PayloadActionCreator<SuccessPayload>
        FAILURE: PayloadActionCreator<FailurePayload>
    },
    asyncFunction: PromiseCreatorFunction<RequestPayload, SuccessPayload>,
) {
    return function* saga(action: ReturnType<typeof asyncActions.REQUEST>) {
        try {
            const result: SuccessPayload = yield call(asyncFunction, (action as any).payload)
            yield put(asyncActions.SUCCESS(result))
        } catch (error) {
            yield put(asyncActions.FAILURE(error))
        }
    }
}

export const combineSagas = (param: { [key: string]: ForkEffect<never>[] }) => {
    return function* () {
        const targetSagas = Object.values(param).flat()
        for (let i = 0; i < targetSagas.length; i++) {
            yield targetSagas[i]
        }
    }
}
