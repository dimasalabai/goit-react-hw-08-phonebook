import { combineReducers } from '@reduxjs/toolkit';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import contactsReduser from './contacts/contacts-slice';
import filterReduser from './filter/filter-slice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

// const persistedReducer = persistReducer(persistConfig, rootReduser);

export default rootReduser;
