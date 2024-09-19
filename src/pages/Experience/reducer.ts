import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expanded: "",
};

// Reducer for experience page. Keeps track of the current open item in the accordian structure.
const experienceSlice = createSlice({
    name: "experiences",
    initialState,
    reducers: {
        setActiveItem: (state, action) => {
            state.expanded = action.payload;
        },
    },
});


export const { setActiveItem } = experienceSlice.actions;
export default experienceSlice.reducer;