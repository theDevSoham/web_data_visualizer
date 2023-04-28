const option = {
  title: {
    text: 'Trial',
    padding: 20
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['a', 'b', 'c']
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
      data: ['x', 'c', 'v', 'y', 'z', 'n', 'l']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'q',
      type: 'line',
      stack: 'x',
      smooth: true,
      areaStyle: { normal: {} },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'w',
      type: 'line',
      stack: 'x',
      smooth: true,
      areaStyle: { normal: {} },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'r',
      type: 'line',
      stack: 'x',
      smooth: true,
      areaStyle: { normal: {} },
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
}

export { option }
