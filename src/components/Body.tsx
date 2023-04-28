// local imports
import React from 'react'
import Chart1 from './Chart1'

const Body: React.FC = () => {
  const [chartNum, setChartNum] = React.useState<number>(1)

  const updateChart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setChartNum((chartNum) => {
      if (chartNum === 1) return 2
      else return 1
    })
  }
  return (
    <section className="w-full h-8/10 flex flex-col justify-center items-center">
      <div className="w-full h-8/10 px-4">
        {chartNum === 1 && <Chart1 />}
      </div>
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
