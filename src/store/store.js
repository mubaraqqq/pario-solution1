import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data.js";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
