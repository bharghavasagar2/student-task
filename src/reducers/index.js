import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import studentReducer from "./studentReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["studentDetails"]
};

const rootReducer = combineReducers({
  form: formReducer,
  studentDetails: studentReducer
});

export default persistReducer(persistConfig, rootReducer);
