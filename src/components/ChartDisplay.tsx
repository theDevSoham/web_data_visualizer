// local imports
import React from 'react'
import { option } from '../static/static'

// importing the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core'

// Importing the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'

// importing required components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  ToolboxComponent
} from 'echarts/components'

// importing default canvas renderer
import { CanvasRenderer } from 'echarts/renderers'
import type { OptionType, ChartDataType } from '../interfaces/interface'

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  LegendComponent,
  ToolboxComponent
])

// local prop type declaration

interface ChartPropTypes {
  chartData: ChartDataType
  currentChart: number
}

const ChartDisplay: React.FC<ChartPropTypes> = (props) => {
  const [currentOption, setCurrentOption] = React.useState<OptionType>(option)

  // useEffect hook
  React.useEffect(() => {
    setCurrentOption((currentOption) => {
      return {
        ...currentOption,
        title: {
          ...currentOption.title,
          text: `Chart ${props.currentChart}`
        },
        legend: {
          ...currentOption.legend,
          data: [
            `Chart ${props.currentChart} - Line`,
            `Chart ${props.currentChart} - Bar`,
            `Chart ${props.currentChart} - Area`
          ]
        },
        xAxis: {
          ...currentOption.xAxis,
          data: props.chartData.horizontal
        },
        series: [
          {
            ...currentOption.series[0],
            name: `Chart ${props.currentChart} - Line`,
            type: 'line',
            smooth: true,
            areaStyle: undefined,
            data: props.chartData.vertical
          },
          {
            ...currentOption.series[0],
            name: `Chart ${props.currentChart} - Bar`,
            type: 'bar',
            smooth: false,
            areaStyle: undefined,
            data: props.chartData.vertical
          },
          {
            ...currentOption.series[0],
            name: `Chart ${props.currentChart} - Area`,
            type: 'line',
            smooth: true,
            areaStyle: { normal: {} },
            data: props.chartData.vertical
          }
        ]
      }
    })
  }, [props.chartData, props.currentChart])
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={currentOption}
      notMerge={true}
      lazyUpdate={true}
      theme={'dark'}
      opts={{ renderer: 'canvas' }}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default ChartDisplay
