

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-key";

export const register = createAsyncThunk('user/register', async (payload) => {
    //calllapi
    const data = await userApi.register(payload);
    //savedata to local
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USERS, JSON.stringify(data.user));
    //return
    return data.user;
});
export const login = createAsyncThunk('user/login', async (payload) => {
    //calllapi
    const data = await userApi.login(payload);
    // console.log(data)
    //savedata to local
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USERS, JSON.stringify(data.user));
    //return
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USERS)) || {},
        setting: {},
    },
    reducers: {
        logout(state) {
            //clear local storage
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem(StorageKeys.USERS);

            state.current = {};
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }

});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;