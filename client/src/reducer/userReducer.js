import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: [],
    loading:false
}

export const userSlice = createSlice({
    name: 'userStore',
    initialState: initialState,
    reducers:{ 
        login:(state,action) => {
            state.user = action.payload;
        },
        logout:(state,action) => {
            localStorage.clear();
            state.user = [];
        }
    }
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer