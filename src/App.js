import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import NavScrollExample from './pages/navBar'
import { Products } from './pages/products'

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Products />
    </div>
  );
}

export default App;
