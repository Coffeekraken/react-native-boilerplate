import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createReducer from './reducers'

const store = createStore(
  createReducer(), // root reducer with router state
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

store.asyncReducers = {}

export default store
