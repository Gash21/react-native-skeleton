import { createStore, combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
// import placeReducer from './reducers/placeReducer';
import {Basic} from '@redux/reducers'

import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'


const rootReducer = combineReducers({
  basic: Basic
});

// const configureStore = () => {
//   return createStore(rootReducer);
// }

// export default configureStore;

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}

const persistReducers = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistReducers)
export const persistor = persistStore(store)