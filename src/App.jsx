import React from 'react'
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import SobreNosotros from './components/SobreNosotros'
import Productos from './components/Productos'
import Puntos from './components/Puntos'
import InfoTurista from './components/InfoTurista'
import Galeria from './components/Galeria'
import ImgGrande from './components/ImgGrande'
import Contacto from './components/Contacto'
import Anotador from './components/Anotador'
import NavBarContextProvider from '../context/NavBarContextProvider'
import Sucursal from './components/Sucursal'
import PaquetesPublicidad from './components/PaquetesPublicidad'
import Signos from './components/Signos'


function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
  const location = useLocation()
  const hideNavBarRoutes = ['/servicios-anuales', '/signos'] // puedes agregar más rutas si lo necesitas
  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname)

  return (
    <div className='bg-black overflow-hidden relative'>
      <NavBarContextProvider>
        {shouldShowNavBar && <NavBar />}

        <Routes>
          <Route path='*' element={<Hero />} />
          <Route path='/' element={<Hero />} />
          <Route path='/sobre-nosotros' element={<SobreNosotros />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/puntos-de-venta' element={<Puntos />} />
          <Route path='/informacion-turista' element={<InfoTurista />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/galeria/imagen/:id' element={<ImgGrande />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/herramientas/anotador' element={<Anotador />} />
          <Route path='/sucursal/:idSucursal' element={<Sucursal />} />
          <Route path='/servicios-anuales' element={<PaquetesPublicidad />} />
          <Route path='/signos' element={<Signos />} />
        </Routes>

        <Footer />
      </NavBarContextProvider>
    </div>
  )
}

export default AppWrapper
