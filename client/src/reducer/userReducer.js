import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: [],
    activeMenu: "",
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
        },
        activeMenu:(state,action) => {
            state.activeMenu = action.payload;
        }
    }
});
export const { login, logout, activeMenu } = userSlice.actions;
export default userSlice.reducer