import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import './App.css';
import StateContext from './StateProvider';

function App() {

  const [ basket, setBasket] = useState([])
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ login, setLogin] = useState(false)

  return (
    <div className="App">
    <StateContext.Provider
      value={
        {
          basket: basket,
          setBasket: setBasket,
          email: email,
          setEmail: setEmail,
          password: password,
          setPassword: setPassword,
          login: login,
          setLogin: setLogin
      }}>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>

      </Router>
    </StateContext.Provider>


    </div>
  );
}

export default App;
