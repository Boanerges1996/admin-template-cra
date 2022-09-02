import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './reducers/admin'
import sidebarReducer from './reducers/sidebar'
import popUpnotificationReducer from './reducers/popUpNotifications'
import { Store, Action } from 'redux'

const localStorageMiddleware = (store) => (next: any) => (action: any) => {
  if (action.type === 'admin/loginSuccessAction') {
    localStorage.setItem(
      'phubie-admin',
      JSON.stringify({
        ...store.getState(),
        admin: {
          ...store.getState()?.admin,
          ...action.payload,
        },
      })
    )
  } else if (action.type === 'admin/logoutAction') {
    localStorage.removeItem('pp-admin')
  }
  return next(action)
}

const rehydrateState = () => {
  const serializedState = localStorage.getItem('pp-admin')
  if (serializedState !== null) {
    return JSON.parse(serializedState)
  }
}

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    sidebar: sidebarReducer,
    notifications: popUpnotificationReducer,
  },
  devTools: true,
  preloadedState: rehydrateState(),
  middleware: [localStorageMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
