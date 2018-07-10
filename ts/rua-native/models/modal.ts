import { emptyObject } from 'rua'

export default {
  namespace: 'modal',
  state: emptyObject,
  reducers: {
    show(state, { payload: name })
    {
      return { ...state, [ name ]: true }
    },
    hide(state, { payload: name })
    {
      return { ...state, [ name ]: false }
    },
    hideAll(state, { payload: name })
    {
      return emptyObject
    },
  },
  effects: emptyObject,
}
