import { configureStore } from "@reduxjs/toolkit";

import { sesionSlices } from "./reducer";

const store = configureStore({
  reducer: sesionSlices.reducer,
});

export default store;
