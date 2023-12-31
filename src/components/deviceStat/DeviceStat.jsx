import React from 'react'
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { tokens } from '../../theme'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../header'
import ProgressCircle from '../progressCircle/ProgressCircle'
import Device from './device.jpg'
import styles from './deviceStat.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import LineChart from '../lineChartDevice'

const checkoutSchema = yup.object().shape({
  status: yup.string().required('Required'),
})

const DeviceStat = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const [image, setImage] = useState([])
  const [imageURL, setImageURL] = useState([])

  const initialValues = {
    status: 'active',
    userCode: '0001',
    dateCreated: '21-11-2023',
    lastUpdate: '21-11-2023',
  }

  useEffect(() => {
    if (image.length < 1) return
    const newImageUrl = []
    image.forEach((image) => newImageUrl.push(URL.createObjectURL(image)))
    setImageURL(newImageUrl)
  }, [image])

  function onImageChange(e) {
    setImage([...e.target.files])
  }

  const handleFormSubmit = (values) => {
    console.log(values)
    // window.location.reload(false)
  }

  return (
    <Box m="0 32px">
      <Header title="Device" subtitle="Device status" />
      <Box display="flex" justifyContent="end">
        <Button
          type="submit"
          size="large"
          color="secondary"
          variant="contained"
        >
          Get Report
        </Button>
      </Box>

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
            <Box display="flex" mb="32px">
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={onImageChange}
              />
              <label htmlFor="raised-button-file">
                {image.length < 1 ? (
                  <Box
                    className={styles.imageContainer}
                    width="250px"
                    height="150px"
                    borderRadius="50%"
                    bgcolor={colors.primary[400]}
                    sx={{ cursor: 'pointer' }}
                  >
                    <img src={Device} alt="offerImage" />
                    {/* 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' */}
                  </Box>
                ) : (
                  <Box
                    className={styles.imageContainer}
                    width="250px"
                    height="150px"
                    borderRadius="50%"
                    bgcolor={colors.primary[400]}
                    sx={{ cursor: 'pointer' }}
                  >
                    {imageURL.map((imageSrc) => (
                      <img src={imageSrc} />
                    ))}
                  </Box>
                )}
              </label>
            </Box>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="User Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userCode || ''}
                name="userCode"
                disabled={true}
                error={!!touched.userCode && !!errors.userCode}
                helperText={touched.userCode && errors.userCode}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date Created"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dateCreated || ''}
                name="dateCreated"
                disabled={true}
                error={!!touched.dateCreated && !!errors.dateCreated}
                helperText={touched.dateCreated && errors.dateCreated}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Updated On"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastUpdate || ''}
                name="lastUpdate"
                disabled={true}
                error={!!touched.lastUpdate && !!errors.lastUpdate}
                helperText={touched.lastUpdate && errors.lastUpdate}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                fullWidth
                select
                variant="filled"
                type="text"
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status || ''}
                name="address"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: 'span 1' }}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </TextField>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="end"
              gap="20px"
              mt="20px"
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={!dirty || isSubmitting}
              >
                Update Status
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        backgroundColor={colors.primary[400]}
        mt="20px"
        p="15px 20px"
      >
        <Box display="flex" height="40vh" width="65vw" flexDirection="column">
          <Typography variant="h4">Daily Stat</Typography>
          <LineChart />
        </Box>
        <Box
          width="200px"
          display="flex"
          height="100%"
          flexDirection="column"
          gap="10px"
        >
          <Box
            display="flex"
            padding="10px"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap="10px"
            backgroundColor={colors.primary[600]}
          >
            <Typography variant="h4">Battery</Typography>
            <ProgressCircle progress="0.8" icon="battery" />
          </Box>
          <Box
            display="flex"
            padding="10px"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap="10px"
            backgroundColor={colors.primary[600]}
          >
            <Typography variant="h4">Item Count</Typography>
            <ProgressCircle progress="0.4" icon="count" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DeviceStat
