import { combineReducers } from "@reduxjs/toolkit";

import navigationReducer from "./features/navigationSlice";
import colorReducer from "./features/colorsSlice";

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    colors: colorReducer,
});
