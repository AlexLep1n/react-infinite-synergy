import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selectedUser: {},
  },
  reducers: {
    chooseUser: (state, { payload: userId }) => {
      state.selectedUser = {
        ...state.users.filter((user) => user.id === userId),
      };
    },
  },
});

export const { chooseUser } = usersSlice.actions;

export default usersSlice.reducer;
