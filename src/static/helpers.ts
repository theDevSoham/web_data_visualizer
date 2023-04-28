// importing the json data
import data from '../assets/Wine-Data.json'
import type { ChartDataType } from '../interfaces/interface'

const getChart1Data = (): ChartDataType => {
  const flavanoids = data.map((item) => {
    if (typeof item.Flavanoids === 'string') {
      return parseFloat(item.Flavanoids)
    }

    return item.Flavanoids
  })
  const ash = data.map((item) => {
    if (typeof item.Ash === 'string') {
      return parseFloat(item.Ash)
    }

    return item.Ash
  })
  return { horizontal: flavanoids, vertical: ash, nameX: 'Flavanoids', nameY: 'Ash' }
}

const getChart2Data = (): ChartDataType => {
  const alcohol = data.map((item) => {
    if (typeof item.Alcohol === 'string') {
      return parseFloat(item.Alcohol)
    }

    return item.Alcohol
  })
  const magnesium = data.map((item) => {
    if (typeof item.Magnesium === 'string') {
      return parseFloat(item.Magnesium)
    }

    return item.Magnesium
  })
  return { horizontal: alcohol, vertical: magnesium, nameX: 'Alcohol', nameY: 'Magnesium' }
}

export { getChart1Data, getChart2Data }
