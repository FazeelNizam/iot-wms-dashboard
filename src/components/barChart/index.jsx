import React from 'react'
import { useTheme } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import { tokens } from '../../theme'
import { barChartData } from '../../data/chartData'

const BarChart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <ResponsiveBar
      data={barChartData}
      keys={[
        'IOTDev-01',
        'IOTDev-02',
        'IOTDev-03',
        'IOTDev-04',
        'IOTDev-05',
        'IOTDev-06',
        'IOTDev-07',
        'IOTDev-08',
        'IOTDev-09',
      ]}
      indexBy="name"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Count',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }
    />
  )
}

export default BarChart
