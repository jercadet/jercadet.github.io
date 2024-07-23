import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    link: "/",
    title: "Home",
};

const pagesSlice = createSlice({
    name: "pages",
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            document.title = `${action.payload} - Jeremiah Cadet`;
            state.title = action.payload;
            state.link = action.payload.toLowerCase();
        },
    },
});


export const { setActivePage } = pagesSlice.actions;
export default pagesSlice.reducer;