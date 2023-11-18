import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Duster from './routes/Duster.jsx'
import Kangoo from './routes/Kangoo.jsx'
import Alaskan from './routes/Alaskan.jsx'
import Oroch from './routes/Oroch.jsx'
import Sandero from './routes/Sandero.jsx'
import Stepway from './routes/Stepway.jsx'
import Logan from './routes/Logan.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/Duster' element={<Duster />}></Route>
        <Route path='/Kangoo' element={<Kangoo />}></Route>
        <Route path='/Alaskan' element={<Alaskan />}></Route>
        <Route path='/Oroch' element={<Oroch />}></Route>
        <Route path='/Sandero' element={<Sandero />}></Route>
        <Route path='/Stepway' element={<Stepway />}></Route>
        <Route path='/Logan' element={<Logan />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
