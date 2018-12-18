import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CHANGE_FILTER,
  FETCH_TODOS
} from './constants'

export const fetchTodos = () => ({
  type: FETCH_TODOS
})

export const addTodo = text => ({
  type: ADD_TODO,
  text
})

export const toggleTodo = todo => ({
  type: TOGGLE_TODO,
  todo
})

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
})

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter
})
