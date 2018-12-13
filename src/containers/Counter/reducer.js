import produce from 'immer'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './constants'

const initialState = {
  count: 0
}

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      draft.count += action.increment
      break
    case DECREMENT_COUNTER:
      draft.count -= action.decrement
      break
    default:
      return draft
  }
  return draft
})
