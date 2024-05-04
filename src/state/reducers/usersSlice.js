import { createSlice } from "@reduxjs/toolkit";
import { fetchWorkers } from "../../api/fetchWorkers";
import { recursiveBinarySearch } from "../../helpers/binarySearch";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: {
      entities: [],
      status: "idle",
      error: false,
    },
    selectedUser: {},
  },
  reducers: {
    chooseUser: (state, { payload: userId }) => {
      state.selectedUser = recursiveBinarySearch(
        state.value.entities,
        userId,
        0,
        state.value.entities.length
      );
    },
    saveUser: (state, { payload: userData }) => {
      state.value.entities.splice(userData.id - 1, 1, userData);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkers.pending, (state) => {
        state.value.status = "loading";
      })
      .addCase(fetchWorkers.fulfilled, (state, { payload: workers }) => {
        state.value.status = "success";
        state.value.entities = workers;
        state.value.error = false;
      })
      .addCase(fetchWorkers.rejected, (state) => {
        state.value.error = true;
        state.value.status = "failed";
      });
  },
});

export const { chooseUser, saveUser } = usersSlice.actions;

export default usersSlice.reducer;
