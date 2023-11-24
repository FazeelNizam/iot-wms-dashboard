import React from 'react'
import {
  Box,
  Typography,
  Button,
  useTheme,
  Tooltip,
  IconButton,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'

import styles from './addUsers.module.css'
import Header from '../../components/header'
import { tokens } from '../../theme'
import { mockDataUsers } from '../../data/mockData'

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined'

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const Users = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID', editable: true },
    {
      field: 'img',
      headerName: 'Profile Picture',
      renderCell: (params) => {
        return (
          <Box className={styles.cellWithImg}>
            <img className={styles.cellImg} src={params.row.img} alt="avatar" />
          </Box>
        )
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'userType',
      headerName: 'User Type',
      flex: 1,
      renderCell: ({ row: { userType } }) => {
        return (
          <Box
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              userType === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {userType === 'admin' && (
              <>
                <AdminPanelSettingsOutlinedIcon />
                <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
                  {userType}
                </Typography>
              </>
            )}
            {userType === 'moderator' && (
              <>
                <AddModeratorOutlinedIcon />
                <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
                  {userType}
                </Typography>
              </>
            )}
          </Box>
        )
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: () => {
        return (
          <Box p="5px" display="flex" justifyContent="center" gap="10px">
            <Tooltip title="View device" arrow>
              <Link to="/user">
                <IconButton>
                  <VisibilityOutlinedIcon fontSize="large" />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Remove device" arrow>
              <IconButton color="error">
                <DeleteOutlineOutlinedIcon
                  fontSize="large"
                  sx={{ color: colors.redAccent[500] }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        )
      },
    },
  ]

  return (
    <div>
      <Box m="0 32px">
        <Header title="USERS" subtitle="Manage users" />
        <Box display="flex" justifyContent="end">
          <Link to="/addusers">
            <Button
              type="submit"
              size="large"
              color="secondary"
              variant="contained"
            >
              Add User
            </Button>
          </Link>
        </Box>

        <Box
          height="75vh"
          mt="10px"
          sx={{
            '& .MuiDataGrid-toolbarContainer': {
              backgroundColor: colors.blueAccent[700],
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
            },
            '& .MuiButtonBase-root': {
              color: colors.grey[200],
            },
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
              borderRadius: 0,
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[700],
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid
            slots={{ toolbar: GridToolbar }}
            checkboxSelection
            rows={mockDataUsers}
            columns={columns}
            rowHeight={65}
          />
        </Box>
      </Box>
    </div>
  )
}

export default Users
