import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react";

const getStoredUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

const storeUser = (user) => {
    const users = getStoredUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users))


}

export const register = createAsyncThunk(
    'auth/register', async (userData, { rejectWithValue }) => {
        const users = getStoredUsers();
        if (users.find(usr => usr.userName === userData.userName)) {
            return rejectWithValue('کاربربااین نام کاربری قبلا ثبت نام کرده است');
        }
        else {
            const newUser = {
                id: Date.now(),
                userName: userData.userName,
                passWord: userData.passWord

            }

            storeUser(newUser);
            return {
                id: newUser.id,
                userName: newUser.userName,
                passWord: newUser.passWord
            }
        }

    });

export const login = createAsyncThunk(
    'auth/login', async (credentials, { rejectWithValue }) => {
        const users = getStoredUsers();
        const user = users.find(usr => usr.userName === credentials.userName && usr.passWord === credentials.passWord)
        if (user) {
            return {
                id: user.id,
                userName: user.userName,
                passWord: user.passWord
            }
        }
        else {
            return rejectWithValue('UserName or Password is wrong')
        }

    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        loading: false,
        error: null,
    },
    reducers: {
        logOut: (state) => {
            state.user = null;
            state.isLoggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.user = action.payload;

            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;

            })

    }
})

export const { logOut } = authSlice.actions;
export default authSlice.reducer;