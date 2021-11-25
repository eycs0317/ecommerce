import React, { useState, useContext } from 'react'
import './login.css'
import StoreIcon from '@material-ui/icons/Store';
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import StateContext from './StateProvider';

function Login () {
  let { email, setEmail, password, setPassword, login, setLogin } = useContext(StateContext);
  let navigate = useNavigate();
  // let history = useHistory();
  // const [ email, setEmail] = useState('')
  // const [ password, setPassword] = useState('')

  const signUp = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setLogin(true)
      setPassword('')
      navigate('/')
      // navigate.push('/');
      // history.push('/');
    })
    .catch(err => {
      console.log('error code - ', err.code)
      console.log('error message - ', err.message)
      alert(err.message)
    })
  }

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setLogin(true)
      setPassword('')
      navigate('/')
      console.log('user sign in')
    })
    .catch(err => {
      console.log(err.code)
      console.log(err.message)
      alert(err.message)
    })
  }
  return (
    <div className='login'>

      <div className="login-store">
        <StoreIcon className='login-icon' fontSize='large'/>
        <h3 className='login-store-name'>myShop</h3>
      </div>

      <div className="login-container">
        <form className="login-form">
          <h3>Sign-in</h3>
          <label>E-mail</label>
          <input
            className='login-input-email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
          <label>Passward</label>
          <input
            className='login-input-password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} ></input>
          <button className='login-sigin-button' onClick={signIn}>Sign in</button>
        </form>
        <p className='login-disclaimer'>Disclaimer - This is just a App that i create to practice with React, React router and etc. No Actual product are being sold in here.</p>
        <button onClick={signUp}>Create your myShop Account</button>
      </div>


    </div>

  )
}

export default Login;