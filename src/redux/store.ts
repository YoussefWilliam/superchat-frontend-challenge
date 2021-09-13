import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contributorsDetailsReducer from "../components/RepoPage/contributersSlice";
import repoDetailsReducers from "../components/HomePage/landingPageSlice";

export const store = configureStore({
  reducer: {
    repoDetails: repoDetailsReducers,
    contributorsDetails: contributorsDetailsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
