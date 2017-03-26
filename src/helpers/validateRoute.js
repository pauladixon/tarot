import { push } from 'react-router-redux'

export const validateRoute = (route, store) => {
  switch (route) {
    case 'tarot-table':
      if(!store.getState().spreadTypeState.type)
        store.dispatch(push('/'))
      break

    case 'reading':
      if(!store.getState().userChoiceState.length)
        store.dispatch(push('/'))
      break

    default:
      break
  }
}