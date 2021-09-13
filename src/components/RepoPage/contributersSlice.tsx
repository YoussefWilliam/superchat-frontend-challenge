import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataInterface } from "../../common/interfaces";

const initialState: DataInterface = {
  status: "idle",
  data: null,
};

export const fetchContributes = createAsyncThunk(
  "repos/fetchContributes",
  async ({username, reponame}: {username: string, reponame: string}) => {
    let githubAPILink = process.env.REACT_APP_GITHUB_API;
    const response = await fetch(`${githubAPILink}/repos/${username}/${reponame}/contributors`);
    const data = await response.json();
    return data;
  }
);

export const contributorsDetailsSlice = createSlice({
  name: "fetchContributes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContributes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContributes.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchContributes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const contributorsDetailsInfo = (state: any) => state.contributorsDetails;

const contributorsDetailsReducer = contributorsDetailsSlice.reducer;
export default contributorsDetailsReducer;
