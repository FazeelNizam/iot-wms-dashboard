import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import styles from './summary.module.css'
import Header from '../../components/header'
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined'
import DeviceUnknownOutlinedIcon from '@mui/icons-material/DeviceUnknownOutlined'
import MultilineChartOutlinedIcon from '@mui/icons-material/MultilineChartOutlined'
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import LineChart from '../../components/lineChart'
import RadialBarChart from '../../components/radialBarChart'

const Summary = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="0 32px">
      <Header title="SUMMARY" subtitle="Welcome" />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="20px"
      >
        {/* ROW 1 */}

        {/* Card 1 */}
        <Box
          className={styles.statCardContainer}
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box className={styles.cardBody}>
            <Box className={styles.cardTitleContainer}>
              <Box>
                <DeviceUnknownOutlinedIcon sx={{ fontSize: '28px' }} />
                <Typography
                  variant="h3"
                  sx={{ color: colors.grey[100] }}
                  className={styles.cardTitle}
                >
                  Device Status
                </Typography>
              </Box>
            </Box>
            <Box className={styles.cardStatContainer}>
              <Box className={styles.cardStat}>
                <Typography
                  variant="h4"
                  sx={{ color: colors.greenAccent[500] }}
                >
                  Active
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.greenAccent[600] }}
                >
                  26
                </Typography>
              </Box>
              <Box className={styles.cardStat}>
                <Typography variant="h4" sx={{ color: colors.redAccent[500] }}>
                  Inactive
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.redAccent[600] }}
                >
                  4
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Card 2 */}
        <Box
          className={styles.statCardContainer}
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box className={styles.cardBody}>
            <Box className={styles.cardTitleContainer}>
              <Box>
                <ScaleOutlinedIcon sx={{ fontSize: '28px' }} />
                <Typography
                  variant="h3"
                  sx={{ color: colors.grey[100] }}
                  className={styles.cardTitle}
                >
                  Weight
                </Typography>
              </Box>
            </Box>
            <Box className={styles.cardStatContainer}>
              <Box className={styles.cardStat}>
                <Typography
                  variant="h4"
                  sx={{ color: colors.greenAccent[500] }}
                >
                  Minimum
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.greenAccent[600] }}
                >
                  28
                </Typography>
              </Box>
              <Box className={styles.cardStat}>
                <Typography variant="h4" sx={{ color: colors.redAccent[500] }}>
                  Maximum
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.redAccent[600] }}
                >
                  86
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Card 3 */}
        <Box
          className={styles.statCardContainer}
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box className={styles.cardBody}>
            <Box className={styles.cardTitleContainer}>
              <Box>
                <MultilineChartOutlinedIcon sx={{ fontSize: '28px' }} />
                <Typography
                  variant="h3"
                  sx={{ color: colors.grey[100] }}
                  className={styles.cardTitle}
                >
                  Efficiency
                </Typography>
              </Box>
            </Box>
            <Box className={styles.cardStatContainer}>
              <Box className={styles.cardStat}>
                <Typography
                  variant="h4"
                  sx={{ color: colors.greenAccent[500] }}
                >
                  Maximum
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.greenAccent[600] }}
                >
                  84%
                </Typography>
              </Box>
              <Box className={styles.cardStat}>
                <Typography variant="h4" sx={{ color: colors.redAccent[500] }}>
                  Minimum
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.redAccent[600] }}
                >
                  43.8%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Card 4 */}
        <Box
          className={styles.statCardContainer}
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box className={styles.cardBody}>
            <Box className={styles.cardTitleContainer}>
              <Box>
                <DeviceThermostatOutlinedIcon sx={{ fontSize: '28px' }} />
                <Typography
                  variant="h3"
                  sx={{ color: colors.grey[100] }}
                  className={styles.cardTitle}
                >
                  Temperature
                </Typography>
              </Box>
            </Box>
            <Box className={styles.cardStatContainer}>
              <Box className={styles.cardStat}>
                <Typography
                  variant="h4"
                  sx={{ color: colors.greenAccent[500] }}
                >
                  Minimum
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.greenAccent[600] }}
                >
                  17 deg
                </Typography>
              </Box>
              <Box className={styles.cardStat}>
                <Typography variant="h4" sx={{ color: colors.redAccent[500] }}>
                  Maximum
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.redAccent[600] }}
                >
                  64 deg
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
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
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
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
                Battery Details
              </Typography>
            </Box>
          </Box>
          <Box height="300px" m="-20px 0 0 0">
            <RadialBarChart />
          </Box>
        </Box>

        {/* ROW 3 */}

        {/* Card 01 */}
        <Box
          className={styles.statCardContainer}
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box className={styles.cardBody}>
            <Box className={styles.cardTitleContainer}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ color: colors.grey[100] }}
                  className={styles.cardTitle}
                >
                  IOTDev-26
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
                Active
              </Typography>
            </Box>

            <Box className={styles.latestCardStat} mt="10px">
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Weight
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  78
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Temperature
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  29 deg
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Efficiency
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  62%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Card 02 */}
        <Box
          className={styles.statCardContainer}
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box className={styles.cardBody}>
            <Box className={styles.cardTitleContainer}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ color: colors.grey[100] }}
                  className={styles.cardTitle}
                >
                  IOTDev-27
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
                Active
              </Typography>
            </Box>

            <Box className={styles.latestCardStat} mt="10px">
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Weight
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  48
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Temperature
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  22 deg
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Efficiency
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  57%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Card 03 */}
        <Box
          className={styles.statCardContainer}
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box className={styles.cardBody}>
            <Box className={styles.cardTitleContainer}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ color: colors.grey[100] }}
                  className={styles.cardTitle}
                >
                  IOTDev-28
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
                Active
              </Typography>
            </Box>

            <Box className={styles.latestCardStat} mt="10px">
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Weight
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  43
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Temperature
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  36 deg
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: colors.grey[200] }}>
                  Efficiency
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.grey[200] }}
                >
                  61%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Summary
