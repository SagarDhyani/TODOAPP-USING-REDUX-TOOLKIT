import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import todoReducer from "./todoSlice"

// console.log("todoreducer:", todoReducer)

const rootReducers = combineReducers({
   todos: todoReducer
})

const persistConfig = {
    key: 'persist-store',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({

    reducer: persistedReducer
})

const persistor = persistStore(store)


// export default configureStore({

//     todos: {

//         todos: persistReducer,
        

//     }
// })


export default store
export {persistor, store}