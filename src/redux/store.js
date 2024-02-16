import { configureStore } from '@reduxjs/toolkit';

import rootReduser from './rootReduser';

export const store = configureStore({
  reducer: rootReduser,
});
