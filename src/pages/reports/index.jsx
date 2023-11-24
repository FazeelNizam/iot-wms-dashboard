import React from 'react'
import styles from './reports.module.css'
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/header'
import LineChart from '../../components/lineChart'
import { Formik } from 'formik'
import * as yup from 'yup'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataDevice } from '../../data/mockData'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import BarChart from '../../components/barChart'

const checkoutSchema = yup.object().shape({
  filter: yup.string().required('Required'),
})

const Reports = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const initialValues = {
    filter: 'daily',
  }

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      cellClassName: 'name-column--cell',
      flex: 1,
    },
    {
      field: 'battery',
      headerName: 'Battery Percentage',
      flex: 1,
    },
  ]

  const handleFormSubmit = (values) => {
    console.log(values)
    // window.location.reload(false)
  }

  return (
    <Box m="0 32px">
      <Header title="REPORTS" subtitle="Generate Reports" />
      <Box display="flex" justifyContent="end" flexDirection="row" gap="20px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          enableReinitialize={true}
        >
          {({
            values,
            errors,
            touched,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                justifyContent="end"
                flexDirection="row"
                gap="20px"
              >
                <TextField
                  fullWidth
                  select
                  variant="filled"
                  type="text"
                  label="Filter"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.filter || ''}
                  name="filter"
                  error={!!touched.filter && !!errors.filter}
                  helperText={touched.filter && errors.filter}
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                  <MenuItem value="yearly">Yearly</MenuItem>
                </TextField>
                <Button
                  type="submit"
                  size="large"
                  color="secondary"
                  variant="contained"
                  disabled={!dirty || isSubmitting}
                >
                  View Report
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="150px"
        gap="20px"
        mt="20px"
      >
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            p="10px 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Today Stats
              </Typography>
            </Box>
          </Box>
          <Box height="300px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="15px"
          p="10px 30px"
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
            Battery Status
          </Typography>
          <Box
            height="94%"
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
              rows={mockDataDevice}
              columns={columns}
              rowHeight={100}
              getRowId={(mockDataDevice) => mockDataDevice.id}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="15px"
          p="10px 30px"
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
            Item Count
          </Typography>
          <Box height="300px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Reports
