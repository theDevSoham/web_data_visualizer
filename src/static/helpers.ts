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
  return { horizontal: flavanoids, vertical: ash }
}

export { getChart1Data }
