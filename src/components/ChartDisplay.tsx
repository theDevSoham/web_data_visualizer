/*
 *The ChartDisplay component is responsible for displaying the chart based on the data provided by the user.
 */

/*
 *local imports
 */
import React from 'react'
import { option } from '../static/static'
import type { OptionType, ChartDataType } from '../interfaces/interface'

/*
 *Importing the echarts core library.
 *echarts-for-react provides a declarative way to use echarts in a React application.
 *It internally integrates echarts by using the latest version, and provides a declarative React component interface.
 *echarts-for-react supports TypeScript.
 */
import ReactEChartsCore from 'echarts-for-react/lib/core'

/*
 *Importing the echarts supports library.
 *echarts supports is a library that provides a set of common classes, which can be used to extend echarts functionalities.
 *It is used to load the extensions of echarts.
 */
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'

/*
 *Importing the echarts components that are required.
 */
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  ToolboxComponent
} from 'echarts/components'

/*
 *Importing the echarts renderers that are required.
 */
import { CanvasRenderer } from 'echarts/renderers'

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
          text: `Chart ${props.currentChart}`,
          padding: 0
        },
        legend: {
          ...currentOption.legend,
          show: false
        },
        xAxis: {
          ...currentOption.xAxis,
          data: props.chartData.horizontal,
          name: props.chartData.nameX,
          nameGap: 10,
          nameLocation: 'end',
          nameTextStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            align: 'center'
          }
        },
        yAxis: {
          ...currentOption.yAxis,
          name: props.chartData.nameY,
          nameGap: 20,
          nameLocation: 'end',
          nameTextStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            align: 'center'
          }
        },
        series:
          props.currentChart === 1
            ? [
                {
                  ...currentOption.series[0],
                  name: `${props.chartData.nameY} - Line`,
                  type: 'line',
                  smooth: true,
                  areaStyle: undefined,
                  data: props.chartData.vertical
                }
              ]
            : [
                {
                  ...currentOption.series[0],
                  name: `${props.chartData.nameY} - Bar`,
                  type: 'bar',
                  smooth: true,
                  areaStyle: undefined,
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
