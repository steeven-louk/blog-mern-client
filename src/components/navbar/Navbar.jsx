import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

// import './style.scss';

const Navbar = () => {
  const user = true;

  return (


    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-center justify-content-between px-5" id="navbarText">
        <div className="left-nav">
            <ul className='navbar-nav d-flex gap-3'>
                <li className='icon'><FontAwesomeIcon icon="fa-brands fa-square-facebook" style={{ 'width':'25px','height':'25px' }} /></li>
                <li className='icon'><FontAwesomeIcon icon="fa-brands fa-square-twitter"  style={{ 'width':'25px','height':'25px' }} /></li>
                <li className='icon'><FontAwesomeIcon icon="fa-brands fa-square-pinterest"  style={{ 'width':'25px','height':'25px' }} /></li>
                <li className='icon'><FontAwesomeIcon icon="fa-brands fa-square-instagram"  style={{ 'width':'25px','height':'25px' }} /></li>
            </ul>
        </div>
      <ul className="navbar-nav mb-2  text-muted fw-semibold mb-lg-0 text-uppercase">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/write">write</Link>
        </li>

        {!user &&
        <li className="nav-item">
          <Link className="nav-link" to="/">logout</Link>
        </li>
        }
      </ul>

    {user ? 
    (
      <>
         <ul className="navbar-nav mb-2  text-muted fw-semibold mb-lg-0 text-uppercase">
      <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-3" to="/register">Register</Link>
        </li>

      </ul>
      </>
    )
    :(
      <>
        <div className="d-inline fw-semibold text-uppercase align-items-center">

        <Link to='/settings'><img src="./assets/member-4.png" className='rounded-pill img-fluid w-25 me-2' alt="member" /></Link>
        <span><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></span>
      
        
      </div>
      </>
    )
    }
     
      
      
    </div>
  </div>
</nav>

  )
}

export default Navbar