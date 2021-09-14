import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataInterface } from "../../common/interfaces";

const initialState: DataInterface = {
  status: "idle",
  data: null,
};

export const fetchRepoDetails = createAsyncThunk(
  "repos/fetchRepoDetails",
  async ({username, reponame}: {username: string, reponame: string}) => {
    let githubAPILink = process.env.REACT_APP_GITHUB_API;
    const response = await fetch(
      `${githubAPILink}/repos/${username}/${reponame}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

export const repoDetialsSlice = createSlice({
  name: "fetchRepoDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepoDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRepoDetails.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchRepoDetails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const repoDetailsInfo = (state: any) => state.repoDetails;

const repoDetailsReducers = repoDetialsSlice.reducer;
export default repoDetailsReducers;
