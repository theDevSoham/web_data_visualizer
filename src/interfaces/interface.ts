interface ChartDataType {
  horizontal: number[]
  vertical: number[]
}

interface SeriesType {
  name: string
  type: 'line' | 'bar'
  stack?: string
  smooth?: boolean
  areaStyle?: { normal: Record<string, unknown> }
  data: number[]
}

interface OptionType {
  title: {
    text: string
    padding?: number | string
  }
  tooltip: {
    trigger: string
  }
  legend: {
    data: string[]
    padding: number | string
  }
  toolbox: {
    feature: {
      saveAsImage: Record<string, unknown>
    }
  }
  grid: {
    left: string
    right: string
    bottom: string
    containLabel: boolean
  }
  xAxis: [
    {
      type: 'category'
      boundaryGap: boolean
      name?: string
      nameLocation?: 'start' | 'center' | 'middle' | 'end'
      nameGap?: number
      data: number[] | string[]
    }
  ]
  yAxis: [
    {
      type: 'value'
    }
  ]
  series: SeriesType[]
}

export type { ChartDataType, OptionType }
