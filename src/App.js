import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, MenuBebidas, MenuList, MenuPlatos, MenuPostres, Reserva } from './pages/index'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menuBebidas' element={<MenuBebidas />} />
          <Route path='/menu/:category' element={<MenuList />} />
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
