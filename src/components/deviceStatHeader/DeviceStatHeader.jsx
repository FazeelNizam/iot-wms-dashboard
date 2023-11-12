import React from 'react'
import { Box, Button, useTheme } from '@mui/material'
import styles from './deviceStatHeader.module.css'
import { tokens } from '../../theme'

const DeviceStatHeader = ({ title }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div>
      <Box mb="30px">
        <Typography
          variant="h2"
          className={styles.title}
          color={colors.grey[100]}
        >
          {title}
        </Typography>
      </Box>
    </div>
  )
}

export default DeviceStatHeader
