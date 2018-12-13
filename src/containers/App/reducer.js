import produce from 'immer'

const initialState = {}
export default produce((draft = initialState, action) => draft)
