/*
 *Purpose: This file stores initial values of any stateful variables, such as options for charts, etc.
 *This file is used to store the initial values of the options for the charts.
 */

import type { OptionType } from '../interfaces/interface'

const option: OptionType = {
  title: {
    text: 'Trial',
    padding: 20
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['a', 'b', 'c'],
    padding: 20
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      name: 'x-axis',
      nameLocation: 'center',
      nameGap: 30,
      data: [0, 1, 2, 3, 4, 5, 6]
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'a',
      type: 'line',
      stack: 'x',
      smooth: true,
      areaStyle: { normal: {} },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'b',
      type: 'line',
      stack: 'x',
      smooth: true,
      areaStyle: { normal: {} },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'c',
      type: 'line',
      stack: 'x',
      smooth: true,
      areaStyle: { normal: {} },
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
}

export { option }
