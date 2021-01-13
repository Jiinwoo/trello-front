import { createSlice, PayloadAction, Action, current } from '@reduxjs/toolkit'
import { createAsyncActions } from '../../lib'
import { MemberCreateDTO } from '../../../api/dto/MemberDTO'
import { AuthDTO } from '../../../api/dto/AuthDTO'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

interface IMember {
    error?: {
        message: string
        type: AlertType
    }
}

const memberInitialState: IMember = {}

export const createMemberActions = createAsyncActions<
    MemberCreateDTO.Req,
    MemberCreateDTO.Res,
    any
>(`CREATE_MEMBER`)
export const authActions = createAsyncActions<AuthDTO.Req, AuthDTO.Res, any>(
    `AUTH`,
)

const memberSlice = createSlice({
    name: 'member',
    initialState: memberInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createMemberActions.REQUEST, (draft) => {
            draft.error = undefined
        })
        builder.addCase(createMemberActions.SUCCESS, (draft, action) => {
            draft
        })
        builder.addCase(createMemberActions.FAILURE, (draft, action) => {
            if (
                action.payload.response &&
                action.payload.response.status < 500
            ) {
                draft.error = {
                    message: action.payload.response.data.message,
                    type: 'error',
                }
            }
        })
        builder.addCase(authActions.REQUEST, (draft) => {
            draft.error = undefined
        })
        builder.addCase(authActions.SUCCESS, (draft, action) => {
            window.sessionStorage.setItem('accessToken', action.payload.token)
        })
        builder.addCase(authActions.FAILURE, (draft, action) => {
            if (
                action.payload.response &&
                action.payload.response.status < 500
            ) {
                draft.error = {
                    message: action.payload.response.data.message,
                    type: 'error',
                }
            }
        })
    },
})
export default memberSlice.reducer
