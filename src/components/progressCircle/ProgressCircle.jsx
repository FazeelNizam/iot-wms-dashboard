import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Battery5BarOutlinedIcon from '@mui/icons-material/Battery5BarOutlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'

const ProgressCircle = ({
  progress = '0.75',
  size = '120',
  icon = 'battery',
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const angle = progress * 360
  const percentage = progress * 100
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {icon === 'battery' ? (
        <>
          <Battery5BarOutlinedIcon />
          <Typography variant="h4" ml="5px">
            {percentage}%
          </Typography>
        </>
      ) : (
        <>
          <CategoryOutlinedIcon />
          <Typography variant="h4" ml="5px">
            {percentage}
          </Typography>
        </>
      )}
    </Box>
  )
}

export default ProgressCircle
