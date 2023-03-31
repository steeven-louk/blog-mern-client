import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth_container'>
        <div className="login_container ">
        <h2>Register</h2>
        <form className='mt-5 d-flex flex-column'>
        <div className="form-group mb-2">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter your username...' className='form-control   p-2' />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email...' className='form-control   p-2' />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter your password...' className='form-control  p-2' />
            </div>

            <button className="btn btn-primary fw-bold my-3">register</button>
            <Link to='/login' className="btn btn-danger fw-bold btn-top ">Login</Link>
        </form>
        </div>
    </div>
  )
}

export default Register