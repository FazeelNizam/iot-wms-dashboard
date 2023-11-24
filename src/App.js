import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { Box, Button, TextField, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { tokens } from '../src/theme'
import { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import SideBar from './pages/global/sidebar/SideBar'
import TopBar from './pages/global/topbar/TopBar'
import Summary from './pages/summary'
import Devices from './pages/devices'
import Users from './pages/users'
import Reports from './pages/reports'
import AddUsers from './pages/addUsers'
import './index.css'
import DeviceStat from './components/deviceStat/DeviceStat'
import User from './components/user'
import TopBarLoginPage from './pages/global/topbar/TopBarLoginPage'
import AddDevices from './pages/addDevices'

const checkoutSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),
})
const initialValues = {
  email: '',
  password: '',
}

function App() {
  const [theme, colorMode] = useMode()
  const colors = tokens(theme.palette.mode)
  const [isSidebar, setIsSidebar] = useState(true)
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const initialAuthState = JSON.parse(localStorage.getItem('isAuth')) || false
  const [isAuth, setAuth] = useState(initialAuthState)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('isAuth', JSON.stringify(isAuth))
  }, [isAuth])

  const handleFormSubmit = (values) => {
    if (values !== null) {
      console.log(values)
      setAuth(!isAuth)
      navigate('/')
    }
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isAuth ? (
            <>
              <SideBar isSidebar={isSidebar} />
              <main className="content">
                <TopBar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/" element={<Summary />} />
                  <Route path="/devices" element={<Devices />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/addusers" element={<AddUsers />} />
                  <Route path="/adddevice" element={<AddDevices />} />
                  <Route path="/devicestat" element={<DeviceStat />} />
                  <Route path="/user" element={<User />} />
                </Routes>
              </main>
            </>
          ) : (
            <>
              <Box width="100vw">
                <Box width="100%">
                  <TopBarLoginPage />
                </Box>
                <Box
                  width="100%"
                  className="login-container"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    m="0 32px"
                    width="25%"
                    bgcolor={colors.primary[400]}
                    padding="32px"
                    borderRadius="10px"
                  >
                    <Box
                      display="flex"
                      width="100%"
                      mb="32px"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box className="logoContainer" sx={{ cursor: 'pointer' }}>
                        <img src={`../../assets/logo.jpg`} alt="logo" />
                      </Box>
                      <Typography
                        variant="h2"
                        fontWeight="500"
                        mt="32px"
                        color={colors.greenAccent[200]}
                      >
                        Weight Stat
                      </Typography>
                    </Box>
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
                          <Box
                            display="grid"
                            gap="32px"
                            width="100%"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                              '& > div': {
                                gridColumn: isNonMobile ? undefined : 'span 4',
                              },
                            }}
                          >
                            <TextField
                              fullWidth
                              variant="filled"
                              type="text"
                              label="Email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.email}
                              name="email"
                              error={!!touched.email && !!errors.email}
                              helperText={touched.email && errors.email}
                              sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                              fullWidth
                              variant="filled"
                              type="password"
                              label="Password"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.password}
                              name="password"
                              error={!!touched.password && !!errors.password}
                              helperText={touched.password && errors.password}
                              sx={{ gridColumn: 'span 4' }}
                            />
                          </Box>
                          <Box display="flex" justifyContent="center" mt="32px">
                            <Button
                              type="submit"
                              color="secondary"
                              variant="contained"
                              size="large"
                            >
                              Login
                            </Button>
                          </Box>
                        </form>
                      )}
                    </Formik>
                    <Box
                      display="flex"
                      width="100%"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="row"
                      mt="32px"
                    >
                      {/* <Typography variant="h6" m="0" color={colors.grey[100]}>
                    Fogot password?
                  </Typography> */}
                      <Box ml="10px" className="link">
                        <Link to="/">Reset Password</Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
