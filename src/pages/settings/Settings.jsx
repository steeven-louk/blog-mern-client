import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

// import './style.scss';

const Settings = () => {
  return (
    <div className='row'>
        <div className="settings col-md-9 px-5">
            <div className="setting__container">
                <div className="title_group text-danger d-flex align-items-center justify-content-between">
                    <span className='fw-bold fs-2'>Update Your Account</span>
                    <span className=' fs-5'>Delete Account</span>
                </div>

                <form className='mt-3 fw-bold'>
                    <span>Profile Picture</span>

                    <div className="setting_pp d-flex gap-2 align-items-center my-3">
                        <img src="./assets/feed-image-1.png"  className='img-fluid  rounded-5' alt="" />

                        <label htmlFor="fileInput"><FontAwesomeIcon icon="fa-solid fa-circle-user" /></label>
                        <input type="file" id='fileInput' className='d-none' />
                    </div>


                    <div className="form-group my-3">
                        <label className='form-label'>Username</label>
                        <input type="text" className='form-control' placeholder='ishi' />
                    </div>
                    <div className="form-group mb-3">
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control' placeholder='ishi@ishi.com' />
                    </div>
                    <div className="form-group mb-3">
                        <label className='form-label'>password</label>
                        <input type="password" className='form-control' placeholder='password' />
                    </div>

                    <button className='btn btn-primary mx-auto mt-3 d-block'>Update</button>
                </form>
            </div>
        </div>

        <Sidebar/>
    </div>
  )
}

export default Settings