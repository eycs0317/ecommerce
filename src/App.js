import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import './App.css';


function App() {
  return (
    <div className="App">

    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>

    </Router>

      {/* <Header />
      <Home /> */}
    </div>
  );
}

export default App;
