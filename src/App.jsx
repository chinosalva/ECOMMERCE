import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Products, Busqueda, NotFound, SharedProducts, SingleUser } from './pages'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='Products' element={<SharedProducts />}>
          <Route index element={<Products />} />
          <Route path=':userId' element={<SingleUser />} />
        </Route>
        <Route path='Busqueda' element={<Busqueda />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
