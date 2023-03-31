import React from 'react'
import { Link } from 'react-router-dom'

// import './style.scss'

const Login = () => {
  return (
    <div className='auth_container'>
        <div className="login_container">
        <h2 className='text-capitalize text-center'>Login</h2>
        <form className='mt-5 d-flex flex-column'>
            <div className="form-group mb-2">
                <label htmlFor="" >Email</label>
                <input type="email" className='form-control  border-0 p-2' />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" className='form-control border-0 p-2' />
            </div>

            <button className="btn btn-danger fw-bold my-3">Login</button>
            <Link to='/register' className="btn fw-bold btn-primary btn-top">Register</Link>
        </form>
        </div>
    </div>
  )
}

export default Login