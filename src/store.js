import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// autoMergeLevel2 returns a PersistReducer that will merge the initial state and persisted state two levels deep
// i.e. it will only override keys in the state object that have been persisted
// (rather than just replacing the initial state object with the persisted state object)
// **REDUNDANT** - persistCombineReducers automatically sets the merge method to Level 2
// ## import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; ##

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducers = persistCombineReducers(persistConfig, rootReducer);

const store = createStore(persistedReducers);
const persistor = persistStore(store);
