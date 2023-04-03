import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import './style.scss'

const Write = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();

  const username = 'user1';

  const postData = async (e)=>{
    e.preventDefault();

    const newPost ={
      username: username,
      title,
      desc
    };

    if(file){
      const data = new FormData();
      const filename = file.name;
      data.append('name', filename);
      data.append('image', file);
      newPost.photo = filename;


      try {
        await axios.post("http://localhost:8080/api/upload", data);
      } catch (error) {
        console.log('err', error.message);
      }
    }

    console.log('file', file);

    try {
      await axios.post("http://localhost:8080/api/post", newPost);
      setTitle('');
      setDesc('');
      setFile(null);
      // console.log(post)
    } catch (error) {
      console.log('err', error.message);
    }
  }


  
  return (
    <div className="write  container mt-5">
      
      {file && <img src={URL.createObjectURL(file)} style={{ 'width':'70vw','height':'250px', 'objectFit':'cover' }} className='img-fluid rounded-2' alt="" />}
      
      <form onSubmit={postData} enctype= "multipart/form-data" className="px-2 position-relative mt-3">
          <div className="write__controller align-items-center d-flex">
            <div className="form-group me-3">
              <label className='icon add-icon' htmlFor="fileInput"><FontAwesomeIcon icon="fa fa-circle-plus" className='icon_add' /></label>
              <input type="file" id='fileInput' name='image' onChange={(e)=>setFile(e.target.files[0])}  className='d-none'/>
            </div>
            <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} className='form-control border-0' autoFocus={true} />
          </div>
          <div className="write_group form-group">
            <textarea className='form-control border-0' value={desc} onChange={(e)=> setDesc(e.target.value)} placeholder='Tell your story...' res cols="30" rows="10"></textarea>
          </div>
          <button className='btn position-absolute top-0 end-0 btn-success'>Publish</button>
      </form>
    </div>
  )
}

export default Write
