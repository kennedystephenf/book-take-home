import {createSlice} from '@reduxjs/toolkit'

export interface AuthState {
    user: string;
    token: string;
}

const initialState: AuthState = {
    user: '',
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
    },
})

// Action creators are generated for each case reducer function
export const {setCredentials} = authSlice.actions

export default authSlice.reducer