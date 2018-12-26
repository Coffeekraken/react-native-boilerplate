import store from '../store'
import createReducer from '../reducers'

export default function registerReducer(name, asyncReducer) {
  if (!store.asyncReducers) store.asyncReducers = {}
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
  return asyncReducer
}
