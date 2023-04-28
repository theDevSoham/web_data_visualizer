import React, { Suspense, lazy } from 'react'
import './index.css'
import Loader from './components/Loader'
import Header from './components/Header'
const Body = lazy(async () => await import('./components/Body'))

const App: React.FC = (): JSX.Element => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Suspense fallback={<Loader />}>
        <Body />
      </Suspense>
    </div>
  )
}

export default App
