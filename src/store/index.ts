import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../pages/reducer";
import experienceReducer from "../pages/Experience/reducer";

// Store for redux in front-end
export interface JcadetState {
    pageReducer: {
        link: string;
        title: string;
    };

    experienceReducer: {
        expanded: string;
    };
}
const store = configureStore({
    reducer: {
        pageReducer,
        experienceReducer,
    },
});


export default store;