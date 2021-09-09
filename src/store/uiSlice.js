import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        notification: null,
        loading: false
    },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message
            }
        },
        clearNotification(state, action) {
            state.notification = null
        },
        setLoading(state, action) {
            state.loading = action.payload
        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice;