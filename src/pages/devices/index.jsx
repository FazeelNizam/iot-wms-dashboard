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

import styles from './devices.module.css'
import Header from '../../components/header'

import { tokens } from '../../theme'
import { mockDataDevice } from '../../data/mockData'

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const Devices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'img',
      headerName: 'Picture',
      width: 150,
      renderCell: (params) => {
        return (
          <Box className={styles.cellWithImg}>
            <img className={styles.cellImg} src={params.row.img} alt="device" />
          </Box>
        )
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      cellClassName: 'name-column--cell',
      width: 200,
    },
    {
      field: 'weight',
      headerName: 'Weight',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      width: 200,
    },
    {
      field: 'temp',
      headerName: 'Temperature',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: ({ row: { status } }) => {
        return (
          <Box>
            {status === 'Active' && (
              <Typography color={colors.greenAccent[400]} sx={{ ml: '5px' }}>
                {status}
              </Typography>
            )}
            {status === 'Inactive' && (
              <Typography color={colors.redAccent[400]} sx={{ ml: '5px' }}>
                {status}
              </Typography>
            )}
          </Box>
        )
      },
    },

    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      cellClassName: 'actions',
      flex: 1,
      renderCell: () => {
        return (
          <Box p="5px" display="flex" justifyContent="center" gap="10px">
            <Tooltip title="View device" arrow>
              <Link to="/devicestat">
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
    <Box m="0 32px">
      <Header title="DEVICES" subtitle="Status Reports of Linked Devices" />
      <Box display="flex" justifyContent="end">
        <Link to="/adddevice">
          <Button
            type="submit"
            size="large"
            color="secondary"
            variant="contained"
          >
            Add Device
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
          rows={mockDataDevice}
          columns={columns}
          rowHeight={100}
        />
      </Box>
    </Box>
  )
}

export default Devices
