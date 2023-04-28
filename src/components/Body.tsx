// local imports
import React from 'react'
import ChartDisplay from './ChartDisplay'
import { getChart1Data } from '../static/helpers'
import { type ChartDataType } from '../interfaces/interface'

const Body: React.FC = () => {
  const [chartNum, setChartNum] = React.useState<number>(1)
  const [currentChartData, setCurrentChartData] = React.useState<ChartDataType>(
    getChart1Data()
  )

  // local functions
  const updateChart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setChartNum((chartNum) => {
      if (chartNum === 1) return 2
      else return 1
    })
  }

  // useEffect hook
  React.useEffect(() => {
    if (chartNum === 1) setCurrentChartData(getChart1Data())
    else if (chartNum === 2) setCurrentChartData(getChart1Data())
  }, [chartNum])

  // return statement
  return (
    <section className="w-full h-8/10 flex flex-col justify-center items-center">
      <div className="w-full h-8/10 px-4">{<ChartDisplay chartData={currentChartData} />}</div>
      <div className="w-full h-2/10 flex justify-center items-center">
        <button
          className="bg-blue-700 text-white font-bold py-4 px-8 rounded"
          onClick={updateChart}
        >
          Show Chart {chartNum === 1 ? 2 : 1}
        </button>
      </div>
    </section>
  )
}

export default Body
