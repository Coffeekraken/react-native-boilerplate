import { put, takeEvery } from 'redux-saga/effects'
import { FETCH_TODOS, TODOS_FETCHED } from './constants'

function* fetchTodos(action) {
  const todos = [
    { id: 1, text: 'Hello World', done: false },
    { id: 2, text: 'Hello Universe', done: true },
    { id: 3, text: 'Hello Jupiter', done: false },
    { id: 4, text: 'Hello the Moon', done: true }
  ]
  yield put({ type: TODOS_FETCHED, todos })
}

export default function* mySaga() {
  yield takeEvery(FETCH_TODOS, fetchTodos)
}
