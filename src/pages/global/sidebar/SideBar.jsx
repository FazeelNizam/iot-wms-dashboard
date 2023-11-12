import React, { useState } from 'react'
import styles from './sideBar.module.css'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../../theme'
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const SideBar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('summary')

  return (
    <Box
      className={styles.container}
      sx={{
        '& .ps-sidebar-container': {
          background: `${colors.primary[400]} !important`,
          padding: '16px 0',
        },
        '& .ps-menuitem-root': {
          mb: '15px',
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-button': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .ps-menu-button:hover': {
          color: '#868dfb !important',
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-button.ps-active': {
          color: '#6870fa !important',
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '0 0 50px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box className={styles.logoText}>
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box className={styles.logoContainer}>
                <img alt="logo" src={`../../assets/logo.jpg`} />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ mt: '10px' }}
                >
                  Admin
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  sx={{ mb: '50px' }}
                >
                  Weight Stats
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Link to="/">
              <MenuItem
                active={selected === 'summary'}
                style={{
                  color: colors.grey[100],
                }}
                onClick={() => setSelected('summary')}
                icon={<SummarizeOutlinedIcon />}
              >
                Summary
              </MenuItem>
            </Link>

            <Link to="/devices">
              <MenuItem
                active={selected === 'devices'}
                style={{
                  color: colors.grey[100],
                }}
                onClick={() => setSelected('devices')}
                icon={<DevicesOutlinedIcon />}
              >
                Devices
              </MenuItem>
            </Link>

            <Link to="/users">
              <MenuItem
                active={selected === 'users'}
                style={{
                  color: colors.grey[100],
                }}
                onClick={() => setSelected('users')}
                icon={<PeopleOutlinedIcon />}
              >
                Users
              </MenuItem>
            </Link>

            <Link to="/reports">
              <MenuItem
                active={selected === 'reports'}
                style={{
                  color: colors.grey[100],
                }}
                onClick={() => setSelected('reports')}
                icon={<BarChartOutlinedIcon />}
              >
                Reports
              </MenuItem>
            </Link>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar
