import counterReducer from '../reducer'
import { incrementCounter } from '../actions'

describe('counterReducer', () => {
  let state
  beforeEach(() => {
    state = {
      count: 0
    }
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(counterReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the increment action correctly', () => {
    const expectedResult = {
      count: 1
    }

    expect(counterReducer(state, incrementCounter())).toEqual(expectedResult)
  })
})
