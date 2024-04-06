import { createSlice } from "@reduxjs/toolkit";
import { fetchWorkers } from "../../api/fetchWorkers";
// import { createAsyncThunk } from "@reduxjs/toolkit";

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
      state.selectedUser = {
        ...state.value.entities.filter((user) => user.id === userId),
      };
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

// const API_URL =
//   "http://localhost:5173/react-infinite-synergy/src/api/workers.json";

// export const fetchWorkers = createAsyncThunk(
//   "todos/fetchWorkers",
//   async function () {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error(`Request failed, status ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   }
// );

export const { chooseUser } = usersSlice.actions;

export default usersSlice.reducer;
