import { configureStore } from "@reduxjs/toolkit";
import textGeneratorReducer from "./textGeneratorSlice";

export const store = configureStore({
  reducer: {
    textGenerator: textGeneratorReducer,
  },
});
