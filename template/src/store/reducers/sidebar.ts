import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    changeSidebarStateAction: (state, action) => {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

const { actions, reducer } = sidebarSlice
export const { changeSidebarStateAction } = actions

export default reducer
