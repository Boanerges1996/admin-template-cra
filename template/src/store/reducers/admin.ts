import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAdminStoreState } from '../../utils/interfaces'

const initialState: IAdminStoreState = {
  logged: false,
  authToken: '',
  loading: false,
  admins: [],
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        loading: true,
      }
    },
    loginSuccessAction: (state, action: PayloadAction<any>) => {
      const { payload } = action
      return {
        ...state,
        ...payload,
        loading: false,
      }
    },
    loginFailureAction: (state, action: PayloadAction<any>) => {
      const { payload } = action
      return {
        ...state,
        ...payload,
        loading: false,
      }
    },
    logoutAction: (state) => initialState,
  },
})

const { actions, reducer } = adminSlice

export const { loginAction, logoutAction } = actions
export default reducer
