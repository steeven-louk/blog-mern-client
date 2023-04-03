import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './style.scss'

const SinglePost = () => {


    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})

  useEffect(() => {
        const getSinglePost = async () =>{
            try{
                const data = await axios.get("http://localhost:8080/api/post/"+ path);
                if(data.status === 200){
                    setPost(data.data);
                }
                console.log(data);
            }catch(err){
                console.log('err',err)
            }
        }
        getSinglePost();
  }, [path]);

console.log('path', path);
console.log('post', post);

  return (
    <div className='post col-md-9 mt-4'>
        <div className="post__container w-full px-3">
           {post.photo && <img src={`http://localhost:8080/images/${post?.photo}`}  className='img-fluid object-fit-cover' alt="" /> }
        
        <div className="d-flex align-items-center justify-content-center">
            <h1 className=' mx-auto'>{post.title}.</h1>
        <div className="singlePostEdit ms-auto d-flex gap-3">
                <span className='text-primary icon'><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></span>
                <span className='text-danger icon'><FontAwesomeIcon  icon="fa-solid fa-trash" /></span>
            </div>
        </div>

        <div className="text-muted singlePostInfo d-flex justify-content-between fs-4 mb-4">
            <span>Author: <b>{post.username}</b></span>
            <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        
        <p className="post-text text-start">
            {post.desc}
        </p>
        </div>
    </div>
  )
}

export default SinglePost