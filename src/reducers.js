import { combineReducers } from 'redux'
import appReducer from './containers/App/reducer'

export default asyncReducers =>
  combineReducers({
    app: appReducer,
    ...asyncReducers
  })
