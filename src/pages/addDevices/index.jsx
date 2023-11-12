import React from 'react'
import { Box, Button, TextField, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import styles from './addDevices.module.css'
import Header from '../../components/header'
import AddDeviceForm from '../../components/addDeviceForm/AddDeviceForm'

const AddDevices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="0 32px">
      <Header title="ADD DEVICES" subtitle="Create new device" />
      <AddDeviceForm />
    </Box>
  )
}

export default AddDevices
