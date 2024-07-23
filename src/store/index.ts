import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../pages/reducer";


export interface PageState {
    pageReducer: {
        link: string;
        title: string;
    };
}
const store = configureStore({
    reducer: {
        pageReducer
    }
});


export default store;