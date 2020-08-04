import React from 'react'
import { Tooltip, IconButton } from '@material-ui/core'

const MyButton = ({ children, onClick, btnClassName, tipClassName,tip }) => {
  return (
    <Tooltip title={tip} className={tipClassName} placement="top">
      <IconButton  onClick={onClick} className={btnClassName}>
        {children}
      </IconButton>
    </Tooltip>
  )
}

export default MyButton
