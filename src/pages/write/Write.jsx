import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

// import './style.scss'

const Write = () => {


  const img = false;

  return (
    <div className="write  container mt-5">
      
      {img && <img src="./assets/feed-image-1.png" style={{ 'width':'70vw','height':'250px', 'objectFit':'cover' }} className='img-fluid rounded-2' alt="" />}
      
      <form className="px-2 position-relative mt-3">
          <div className="write__controller align-items-center d-flex">
            <div className="form-group me-3">
              <label className='icon add-icon' htmlFor="fileInput"><FontAwesomeIcon icon="fa fa-circle-plus" className='icon_add' /></label>
              <input type="file" id='fileInput'  className='d-none'/>
            </div>
            <input type="text" placeholder='Title' className='form-control border-0 ' autoFocus={true} />
          </div>
          <div className="write_group form-group">
            <textarea className='form-control border-0' placeholder='Tell your story...' res cols="30" rows="10"></textarea>
          </div>
          <button className='btn position-absolute top-0 end-0 btn-success'>Publish</button>
      </form>
    </div>
  )
}

export default Write