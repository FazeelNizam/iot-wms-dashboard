import React from 'react'
import { Box, Button, TextField, useTheme } from '@mui/material'
import { tokens } from '../../theme'

const DeviceStat = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return <div>DeviceStat</div>
}

export default DeviceStat
