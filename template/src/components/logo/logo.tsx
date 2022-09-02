import { SvgIcon, Icon } from '@mui/material'
import React from 'react'
import BLogoImage from '../../assets/images/logoB.png'
import BLogoFullImage from '../../assets/images/logoFull.png'

export default function BLogo(props) {
  return (
    <Icon style={{ textAlign: 'center' }} {...props}>
      <img
        src={BLogoImage}
        alt=""
        style={{ display: 'flex', height: 'inherit', width: 'inherit' }}
      />
    </Icon>
  )
}

export function BLogoFull(props) {
  return (
    <Icon style={{ textAlign: 'center' }} {...props}>
      <img
        src={BLogoFullImage}
        alt=""
        style={{ display: 'flex', height: 'inherit', width: 'inherit' }}
      />
    </Icon>
  )
}
