import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuBebidas from './pages/MenuBebidas'
import MenuDestacados from './pages/MenuDestacados'
import MenuPlatos from './pages/MenuPlatos'
import MenuPostres from './pages/MenuPostres'
import Reserva from './pages/Reserva'

function App() {
  return (
    <>
      <BrowserRouter>
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
