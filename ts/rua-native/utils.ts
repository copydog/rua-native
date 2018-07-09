export { NavigationActions } from 'react-navigation'

export const delay = (time: any) => new Promise(resolve => setTimeout(resolve, time))

export const createAction = (type: any) => (payload: any) => ({ type, payload })
