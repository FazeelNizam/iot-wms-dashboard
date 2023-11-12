import React, { useContext } from 'react'
import styles from './topBar.module.css'

import { Box, IconButton, Tooltip, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

const TopBar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box className={styles.container}>
      <Box className={styles.iconConatiner}>
        <Tooltip title="Change theme" arrow>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications" arrow>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default TopBar
