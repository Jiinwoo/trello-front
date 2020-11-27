import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit'

interface IGlobal {
    error?: any
    isLoading: boolean
    loadingMessage: string
    dialogMessage: string
}

const globalInitialState: IGlobal = {
    isLoading: false,
    loadingMessage: '',
    dialogMessage: '',
}

const globalSlice = createSlice({
    name: 'global',
    initialState: globalInitialState,
    reducers: {
        SHOW_DIALOG: (draft, action: PayloadAction<string>) => {
            draft.dialogMessage = action.payload
        },
        CONFIRM_DIALOG: (draft) => {
            draft.dialogMessage = ''
        },
        LOADING_START: (draft, action: PayloadAction<string>) => {
            draft.isLoading = true

            draft.loadingMessage = action.payload
        },
        LOADING_END: (draft) => {
            draft.isLoading = false
            draft.loadingMessage = ''
        },
    },
})
export const { SHOW_DIALOG, CONFIRM_DIALOG, LOADING_END, LOADING_START } = globalSlice.actions
export default globalSlice.reducer
