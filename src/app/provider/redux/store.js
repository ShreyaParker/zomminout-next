import {configureStore} from "@reduxjs/toolkit";
import {toggleSlice}from "@/app/provider/redux/toggleSlice";

export const store = configureStore({
  reducer:{
      "toggle" : toggleSlice.reducer
  }
})
