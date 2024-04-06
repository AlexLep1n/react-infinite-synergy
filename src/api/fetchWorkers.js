import { createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL =
//   "http://localhost:5173/react-infinite-synergy/src/api/workers.json";
const API_URL = "https://66091c820f324a9a2882c0ff.mockapi.io/api/users";

export const fetchWorkers = createAsyncThunk(
  "todos/fetchWorkers",
  async function () {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Request failed, status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
);
