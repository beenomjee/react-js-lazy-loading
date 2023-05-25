import React, { Suspense, lazy, } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header, LoadingBar } from './components'
import { useSetupProgressBar } from './hooks'

const Home = lazy(() => import('./modules/Home/Home'))
const About = lazy(() => import('./modules/About/About'))
const ShowCase = lazy(() => import('./modules/ShowCase/ShowCase'))

const App = () => {
  useSetupProgressBar();
  return (
    <>
      <Header />
      <LoadingBar />
      <Suspense fallback=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/showcase' element={<ShowCase />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App