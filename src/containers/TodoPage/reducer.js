import produce from 'immer'
import {
  TODOS_FETCHED,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CHANGE_FILTER,
  FILTER_ALL
} from './constants'

const initialState = {
  todos: [],
  filter: FILTER_ALL
}

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case TODOS_FETCHED:
      draft.todos = action.todos
      return draft
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
