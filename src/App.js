import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import MenuBebidas from './pages/menuBebidas'
import MenuDestacados from './pages/menuDestacados'
import MenuPlatos from './pages/menuPlatos'
import MenuPostres from './pages/menuPostres'
import Reserva from './pages/reserva'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menuBebidas' element={<MenuBebidas />} />
          <Route path='/menuDestacados' element={<MenuDestacados />} />
          <Route path='/menuPlatos' element={<MenuPlatos />} />
          <Route path='/menuPostres' element={<MenuPostres />} />
          <Route path='/reserva' element={<Reserva />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
