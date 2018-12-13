import { defineMessages } from 'react-intl'

// scope
export const scope = 'todo'

// messages
export default defineMessages({
  add: {
    id: `${scope}.add`,
    defaultMessage: 'Add'
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel'
  },
  newTodo: {
    id: `${scope}.newTodo`,
    defaultMessage: 'New todo'
  },
  showAll: {
    id: `${scope}.show.all`,
    defaultMessage: 'All'
  },
  showActive: {
    id: `${scope}.show.active`,
    defaultMessage: 'Active'
  },
  showCompleted: {
    id: `${scope}.show.completed`,
    defaultMessage: 'Completed'
  }
})
