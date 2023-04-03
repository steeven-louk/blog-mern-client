import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import SinglePost from '../components/singlePost/SinglePost'

const PostDetail = () => {
  return (
    <div className='row postDetailHeight' >
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default PostDetail