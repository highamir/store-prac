// Public imports
import { configureStore } from '@reduxjs/toolkit';
import filter  from "../features/filters/filter-slice"
const store = configureStore({
  reducer: {
    filter
    }
})



//* Export types
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
