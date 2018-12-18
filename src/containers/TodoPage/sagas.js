import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_TODOS, TODOS_FETCHED } from './constants'

function* fetchTodos(action) {
  const response = yield axios.get(
    'https://my-json-server.typicode.com/coffeekraken/react-native-boilerplate/todos'
  )
  yield put({ type: TODOS_FETCHED, todos: response.data })
}

export default function* mySaga() {
  yield takeEvery(FETCH_TODOS, fetchTodos)
}
