import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { Field, Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import styles from './addDeviceForm.module.css'

const checkoutSchema = yup.object().shape({
  name: yup.string().required('Required'),
  macAddress: yup.string().required('Required'),
  location: yup.string().required('Required'),
  description: yup.string().required('Required'),
})
const initialValues = {
  name: '',
  macAddress: '',
  location: '',
  description: '',
}

const AddDeviceForm = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const [image, setImage] = useState([])
  const [imageURL, setImageURL] = useState([])

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
  }

  return (
    <Box m="0 32px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" width="100%" flexDirection="row" gap="32px">
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
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="250px"
                      height="150px"
                      borderRadius="10px"
                      bgcolor={colors.primary[400]}
                      sx={{ cursor: 'pointer' }}
                    >
                      <CameraAltOutlinedIcon />
                    </Box>
                  ) : (
                    <Box
                      className={styles.imageContainer}
                      width="250px"
                      height="150px"
                      borderRadius="10px"
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
                width="100%"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: 'span 4' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Mac Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.macAddress}
                  name="macAddress"
                  error={!!touched.macAddress && !!errors.macAddress}
                  helperText={touched.macAddress && errors.macAddress}
                  sx={{ gridColumn: 'span 4' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="location"
                  error={!!touched.location && !!errors.location}
                  helperText={touched.location && errors.location}
                  sx={{ gridColumn: 'span 4' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="description"
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                  sx={{ gridColumn: 'span 4' }}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Device
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default AddDeviceForm
