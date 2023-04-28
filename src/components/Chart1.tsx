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

const Chart1: React.FC = () => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={option}
      notMerge={true}
      lazyUpdate={true}
      theme={'dark'}
      opts={{ renderer: 'canvas' }}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default Chart1
