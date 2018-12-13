import produce from 'immer'
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CHANGE_FILTER,
  FILTER_ALL
} from './constants'

const initialState = {
  todos: [
    { id: 1, text: 'Hello World', done: false },
    { id: 2, text: 'Hello Universe', done: true },
    { id: 3, text: 'Hello Paul', done: true },
    { id: 4, text: 'Hello Valentin', done: true },
    { id: 5, text: 'Hello Jean', done: true }
  ],
  filter: FILTER_ALL
}

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      draft.todos.push({
        id: Math.round(Math.random() * 9999999), // this is ugly
        text: action.text,
        done: false
      })
      return draft
    case TOGGLE_TODO:
      draft.todos.map(todo => {
        if (todo.id === action.todo.id) {
          todo.done = !todo.done
        }
        return todo
      })
      return draft
    case REMOVE_TODO:
      draft.todos = draft.todos.filter(todo => todo.id !== action.todo.id)
      return draft
    case CHANGE_FILTER:
      draft.filter = action.filter
      return draft
    default:
      return draft
  }
})
