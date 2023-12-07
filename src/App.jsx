import React from 'react'
import './index.css'
import Inicio from './routes/inicio.jsx'
import Duster from './routes/Duster.jsx'
import Kangoo from './routes/Kangoo.jsx'
import Alaskan from './routes/Alaskan.jsx'
import Oroch from './routes/Oroch.jsx'
import Sandero from './routes/Sandero.jsx'
import Stepway from './routes/Stepway.jsx'
import Logan from './routes/Logan.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <HashRouter>
          <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/Duster' element={<Duster/>}></Route>
            <Route path='/Kangoo' element={<Kangoo/>}></Route>
            <Route path='/Alaskan' element={<Alaskan/>}></Route>
            <Route path='/Oroch' element={<Oroch/>}></Route>
            <Route path='/Sandero' element={<Sandero/>}></Route>
            <Route path='/Stepway' element={<Stepway/>}></Route>
            <Route path='/Logan' element={<Logan/>}></Route>
          </Routes>
      </HashRouter>
    </>
  )
}

export default App
