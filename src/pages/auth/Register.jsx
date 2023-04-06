import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

import './style.scss'

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")


  const handleSubmit = async(e) =>{
    e.preventDefault();

    try {

  if( password.length < 5){
    setError("password is too short");
  }
  else{
      await axios.post('http://localhost:8080/api/auth/register',{
        username, email, password
      });
      
      setUsername('');
      setEmail('');
      setPassword('');

      setTimeout(()=>{
        window.location.replace('/login');
      },2000)
  }
    
    } catch (error) {
      console.log('err',error);
      setError(error?.response.data.message)
    }
  }

  return (
    <div className='auth_container'>
        <div className="login_container ">
        <h2>Register</h2>
        <form className='mt-5 d-flex flex-column' onSubmit={handleSubmit}>
        <div className="form-group mb-2">
                <label htmlFor="">Username</label>
                <input type="text" name='username' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Enter your username...' className='form-control p-2' />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="">Email</label>
                <input type="email" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email...' className='form-control p-2' />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password...' className='form-control p-2' />
            </div>

            <button className="btn btn-primary fw-bold my-3">register</button>
            <Link to='/login' className="btn btn-danger fw-bold btn-top ">Login</Link>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </div>
  )
}

export default Register