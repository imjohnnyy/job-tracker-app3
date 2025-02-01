import { configureStore } from "@reduxjs/toolkit";
import applicationsSlice from "./applicationsSlice";
import statisticsSlice from "./statisticsSlice";
import authenticationSlice from "./authenticationSlice";
import userSlice from "./userSlice";
import profileSlice  from "./profileSlice";

export default configureStore({
  reducer: {
    applicationsSlice: applicationsSlice,
    authenticationSlice: authenticationSlice,
    userSlice: userSlice,
    statisticsSlice: statisticsSlice,
    profileSlice: profileSlice,
  },
});
