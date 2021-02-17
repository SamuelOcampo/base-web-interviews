import { combineReducers } from "redux";

import router from "./router";
import notes from "./notes";
import form from "./form";

const rootReducer = combineReducers({ router, notes, form });

export default rootReducer;
