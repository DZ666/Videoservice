// Default Imports
  import { combineReducers, applyMiddleware, createStore } from "redux"
  import { reducer as formReducer } from "redux-form"
  import thunk from "redux-thunk"

// Reducer Imports
  import actionsReducer from "./reducers/actions.reducer.js"
  import authReducer from "./reducers/auth.reducer.js"
  import filmReducer from "./reducers/film.reducer.js"
  import alertReducer from "./reducers/alert.reducer.js"
  import channelReducer from "./reducers/channel.reducer.js"

let reducersBatch = combineReducers({
  actions: actionsReducer,
  Alert: alertReducer,
  film: filmReducer,
  channel: channelReducer,
  user: authReducer,
  form: formReducer,
})

let store = createStore(reducersBatch, applyMiddleware(thunk))
window.store = store

export default store
