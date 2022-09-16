import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from "./components/index"
import { Home, MenuBebidas, MenuDestacados, MenuPlatos, MenuPostres, Reserva } from './pages/index'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

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
      <Footer/>
    </>
  );
}

export default App;
