import { createSlice, configureStore } from '@reduxjs/toolkit';

const initAuthSlice = {isAuth: false};
const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthSlice,
    reducers: {
        login(state) {state.isAuth=true},
        logout(state) {state.isAuth=false},
    }
});

export default authSlice;