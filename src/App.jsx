import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Help from './component/Help'
import Calculator from './component/bmiCalculator'

const App = () => {
  return (

    <div >
    
<BrowserRouter>
          <Routes>
              <Route path='/' element={<Calculator />}  />
              <Route path='/help' element={<Help />}  />       
            </Routes>
</ BrowserRouter>
    </div>
  )
}

export default App
