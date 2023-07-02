import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText = createAsyncThunk(
  "textGenerator/fetchText",
  async ({ paragraphNum, include }) => {
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${paragraphNum}&format=${include}`
    );
    return res.data;
  }
);

const textGeneratorSlice = createSlice({
  name: "textGenerator",
  initialState: {
    status: "idle",
    fetchedText: "",
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchText.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fetchedText = action.payload;
        console.log("-\n",action.payload);
      })
      .addCase(fetchText.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchText.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default textGeneratorSlice.reducer;
