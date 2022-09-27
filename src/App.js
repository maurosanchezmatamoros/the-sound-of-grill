import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home';
import { Reserva } from './components/index';
import { useState, createContext } from 'react';

export const categoryContext = createContext()

function App() {

  const [category, setCategory] = useState('destacados')

  return (
    <>
      <categoryContext.Provider value={{ category, setCategory }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reserva' element={<Reserva />} />
            <Route path='*' element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </categoryContext.Provider>
    </>
  );
}

export default App;
