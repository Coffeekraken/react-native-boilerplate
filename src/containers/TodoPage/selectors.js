import { createSelector } from 'reselect'
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './constants'

const getVisibilityFilter = state => state.todos.filter
const getTodos = state => state.todos.todos
export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case FILTER_COMPLETED:
        return todos.filter(t => t.done)
      case FILTER_ACTIVE:
        return todos.filter(t => !t.done)
      case FILTER_ALL:
      default:
        return todos
    }
  }
)
