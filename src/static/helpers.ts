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
   *logic: get the collective data for Alcohol and Magnesium from all the data and return minimum magnesium for each alcohol data
   */

  /*
   * Get the collective data for Alcohol and Magnesium from all the data
   */
  const collectiveData = data.map((item) => {
    return {
      Alcohol:
        typeof item.Alcohol === 'string'
          ? parseFloat(item.Alcohol)
          : item.Alcohol,
      Magnesium:
        typeof item.Magnesium === 'string'
          ? parseFloat(item.Magnesium)
          : item.Magnesium
    }
  })

  /*
   * Get minimum magnesium for each alcohol data. Process: structureAlcoholMagnesiumData -> structures the alcohol and magnesium data as a key value pair => minifyData -> get the minimum magnesium for each alcohol data
   */

  const processedData = minifyData(
    structureAlcoholMagnesiumData(collectiveData)
  )
  const alcohol = Array.from(processedData.keys())
  const magnesium = Array.from(processedData.values())

  return {
    horizontal: alcohol,
    vertical: magnesium,
    nameX: 'Alcohol',
    nameY: 'Magnesium'
  }
}

/*
 *Function to structure data into a map with alcohol as key and magnesium as value
 */

const structureAlcoholMagnesiumData = (data: any): Map<number, number[]> => {
  return data.reduce((acc: Map<number, number[]>, item: any) => {
    const key = item.Alcohol
    const value = item.Magnesium

    if (acc.has(key)) {
      const currentValues = acc.get(key) ?? []
      acc.set(key, [...currentValues, value])
    } else {
      acc.set(key, [value])
    }

    return acc
  }, new Map())
}

/*
 *Function to get the minimum magnesium for each alcohol data
 */
const minifyData = (structured: Map<number, number[]>): Map<number, number> => {
  const minified = new Map<number, number>()

  structured.forEach((value, key) => {
    minified.set(
      key,
      value.reduce((acc: number, item: number) => {
        if (item < acc) {
          acc = item
        }
        return acc
      }, value[0])
    )
  })

  return minified
}

export { getChart1Data, getChart2Data }
