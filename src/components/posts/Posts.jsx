import React from 'react'
import { Post } from '../post/Post'

const Posts = ({posts}) => {
  return (
    <div className='col-md-9 d-flex flex-wrap gap-5'>
      {posts?.map((post)=>(
        <Post key={post._id} post={post}/>
      ))}
    </div>
  )
}

export default Posts