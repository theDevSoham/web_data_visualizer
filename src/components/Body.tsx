/*
 *The Body component is responsible for displaying the chart and the button to toggle between the charts.
 */

/*
 *local imports
 */
import React from 'react'
import ChartDisplay from './ChartDisplay'

/*
 *helpers
 */
import { getChart1Data, getChart2Data } from '../static/helpers'

/*
 *types and interfaces
 */
import type { ChartDataType } from '../interfaces/interface'

const Body: React.FC = () => {
  const [chartNum, setChartNum] = React.useState<number>(1) // 1 for Flavanoids vs Ash, 2 for chart Magnesium vs Alcohol
  const [currentChartData, setCurrentChartData] = React.useState<ChartDataType>(
    getChart1Data()
  )

  /*
   *local functions
   */
  const updateChart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setChartNum((chartNum) => {
      if (chartNum === 1) return 2
      else return 1
    })
  }

  /*
   *useEffect hook
   */
  React.useEffect(() => {
    if (chartNum === 1) setCurrentChartData(getChart1Data())
    else if (chartNum === 2) setCurrentChartData(getChart2Data())
  }, [chartNum])

  /*
   *return statement
   */
  return (
    <section className="w-full h-8/10 flex flex-col justify-center items-center">
      <div className="w-full h-8/10 px-4 ip5_h-1/2 ipx_h-6/10 ipD_h-6/10 ipDP_h-7/10">
        {<ChartDisplay chartData={currentChartData} currentChart={chartNum} />}
      </div>
      <div className="w-full h-2/10 flex justify-center items-center ip5_h-1/2 ipx_h-4/10 ipD_h-4/10 ipDP_h-3/10">
        <button
          className="bg-blue-700 text-white font-bold py-4 px-8 rounded ip5_py-4 ip5_px-8 ipx_py-4 ipx_px-8 ipD_py-4 ipD_px-8 ipDP_py-4 ipDP_px-8"
          onClick={updateChart}
        >
          <span className="text-md ip5_text-md ipx_text-md ipD_text-md ipDP_text-md">
            Show Chart {chartNum === 1 ? 2 : 1}
          </span>
        </button>
      </div>
    </section>
  )
}

export default Body
