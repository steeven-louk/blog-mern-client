import React from 'react'
import { Post } from '../post/Post'

import RotateLoader from "react-spinners/RotateLoader";

const Posts = ({posts, loading}) => {
  return (
    <div className='col-md-9 d-flex flex-wrap gap-5'>
      {!loading ? <>
        {posts?.map((post)=>(
        <Post key={post._id} post={post} />
      ))}
      </> 
      :
      
      <RotateLoader
        color="#36d7b7"
        margin={15}
        size={50}
        loading={loading}
        />

     }

    </div>
  )
}

export default Posts