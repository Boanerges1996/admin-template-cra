import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'

// import SimpleBar from 'simplebar-react'
// import 'simplebar-react/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { changeSidebarStateAction } from '../store/reducers'
import BLogo, { BLogoFull } from './logo/logo'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector(
    (state: any) => state.sidebar.sidebarUnfoldable
  )
  const sidebarShow = useSelector((state: any) => state.sidebar.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(changeSidebarStateAction({ sidebarShow: visible }))
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <BLogo className="sidebar-brand-narrow" />
        <BLogoFull className="sidebar-brand-full" />
      </CSidebarBrand>
      <CSidebarNav>
        {/* <SimpleBar> */}
        <AppSidebarNav items={navigation} />
        {/* </SimpleBar> */}
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => {
          dispatch(
            changeSidebarStateAction({
              sidebarUnfoldable: !unfoldable,
            })
          )
        }}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
