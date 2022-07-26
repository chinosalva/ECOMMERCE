import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import NavScrollExample from './pages/navBar'
import {products} from './pages/products'

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <products />
    </div>
  );
}

export default App;
