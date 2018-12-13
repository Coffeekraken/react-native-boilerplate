import produce from 'immer'

initialState = {}
export default produce((draft = initialState, action) => {
  return draft
})
