import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

import './style.scss';
import { useState } from 'react';
import axios from 'axios';

const Settings = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [file, setFile] = useState();


    const handleUpdate = async (e)=>{
        e.preventDefault();
        // alert('update');

        const updateUser ={
            username,
            email,
            password
        }

        if(file){
            const formData = FormData;
            const filename = file.name;
            formData.append('name', filename)
            formData.append('image', file);
            updateUser.profilePicture = filename

        try {
            await axios.post('http://localhost:8080/api/upload', formData);
        } catch (error) {
            console.log('img', error)
        }
        }

        try {
            const update = await axios.put('http://localhost:8080/api/users/update', updateUser);
            console.log('update', update);
        } catch (error) {
            console.log('e', error);
        }
    }


  return (
    <div className='row'>
        <div className="settings col-md-9 px-5 mt-5">
            <div className="setting__container">
                <div className="title_group text-danger d-flex align-items-center justify-content-between">
                    <span className='fw-bold fs-2'>Update Your Account</span>
                    <span className=' fs-5'>Delete Account</span>
                </div>

                <form className='mt-3 fw-bold' onSubmit={handleUpdate}>
                    <span>Profile Picture</span>

                    <div className="setting_pp d-flex gap-2 align-items-center my-3">
                        <img src="./assets/feed-image-1.png"  className='img-fluid  rounded-5' alt="" />

                        <label htmlFor="fileInput"><FontAwesomeIcon icon="fa-solid fa-circle-user" /></label>
                        <input type="file" id='fileInput' name='image' onChange={(e)=> setFile(e.target.file[0])} className='d-none' />
                    </div>


                    <div className="form-group my-3">
                        <label className='form-label'>Username</label>
                        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className='form-control' placeholder='ishi' />
                    </div>
                    <div className="form-group mb-3">
                        <label className='form-label'>Email</label>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='form-control' placeholder='ishi@ishi.com' />
                    </div>
                    <div className="form-group mb-3">
                        <label className='form-label'>password</label>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='form-control' placeholder='password' />
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