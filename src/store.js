import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createReducer from './reducers'
import thunkMiddleware from './middlewares/thunk'
import sagaMiddleware from './middlewares/saga'

const store = createStore(
  createReducer(), // root reducer with router state
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunkMiddleware))
)

store.asyncReducers = {}

export default store
