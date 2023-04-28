/*
 *Purpose: Helper functions for the charts.
 */

/*
 *importing the json data
 */
import data from '../assets/Wine-Data.json'

/*
 *importing the interface
 */
import type { ChartDataType } from '../interfaces/interface'

/*
 *function to get the data for the first chart
 */
const getChart1Data = (): ChartDataType => {
  /*
   *logic to convert the string data to number for Flavanoids, if there is one, and return the data
   */

  const flavanoids = data.map((item) => {
    if (typeof item.Flavanoids === 'string') {
      return parseFloat(item.Flavanoids)
    }

    return item.Flavanoids
  })

  /*
   *logic to convert the string data to number for Ash, if there is one, and return the data
   */
  const ash = data.map((item) => {
    if (typeof item.Ash === 'string') {
      return parseFloat(item.Ash)
    }

    return item.Ash
  })
  return {
    horizontal: flavanoids,
    vertical: ash,
    nameX: 'Flavanoids',
    nameY: 'Ash'
  }
}

/*
 *function to get the data for the second chart
 */
const getChart2Data = (): ChartDataType => {
  /*
   *logic to convert the string data to number for *minimum* Alcohol, if there is one, and return the data
   */

  const alcohol = data.map((item) => {
    if (typeof item.Alcohol === 'string') {
      return parseFloat(item.Alcohol)
    }

    return item.Alcohol
  })

  /*
   *logic to convert the string data to number for *minimum* Magnesium, if there is one, and return the data
   */
  const magnesium = data.map((item) => {
    if (typeof item.Magnesium === 'string') {
      return Math.floor(parseFloat(item.Magnesium))
    }

    return Math.floor(item.Magnesium)
  })
  return {
    horizontal: alcohol,
    vertical: magnesium,
    nameX: 'Alcohol',
    nameY: 'Magnesium'
  }
}

export { getChart1Data, getChart2Data }
