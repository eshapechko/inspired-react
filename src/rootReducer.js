import { combineReducers } from "@reduxjs/toolkit";

import navigationReducer from "./features/navigationSlice";
import colorReducer from "./features/colorsSlice";
import goodsReducer from "./features/goodsSlice";

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorReducer,
    goods: goodsReducer,
});
