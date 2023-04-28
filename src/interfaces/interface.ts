interface ChartDataType {
  horizontal: number[]
  vertical: number[]
  nameX: string
  nameY: string
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
    show?: boolean
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
      nameTextStyle?: {
        fontStyle?: 'normal' | 'italic' | 'oblique'
        fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number
        fontFamily?: 'sans-serif' | 'serif' | 'monospace'
        fontSize?: number
        align?: 'left' | 'center' | 'right'
      }
      data: number[] | string[]
    }
  ]
  yAxis: [
    {
      type: 'value'
      name?: string
      nameLocation?: 'start' | 'center' | 'middle' | 'end'
      nameGap?: number
      nameTextStyle?: {
        fontStyle?: 'normal' | 'italic' | 'oblique'
        fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number
        fontFamily?: 'sans-serif' | 'serif' | 'monospace'
        fontSize?: number
        align?: 'left' | 'center' | 'right'
      }
    }
  ]
  series: SeriesType[]
}

export type { ChartDataType, OptionType }
