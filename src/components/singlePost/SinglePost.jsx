import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './style.scss'

const SinglePost = () => {


    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})
    
    const [updatePostToggle, setUpdatePostToggle] = useState(false);
    
    const [title, setTitle ] = useState("")
    const [desc, setDesc] = useState("")

    const deletePost = async () =>{
        try {
             await axios.delete("http://localhost:8080/api/post/"+ post._id,{data:{username: post.username  }});
            window.location.replace('/');
            
        } catch (error) {
            console.log(error);
        }
    }
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

console.log('post', post);

const handleUpdate = async() =>{
   try {
     await axios.put("http://localhost:8080/api/post/"+ path,{
        username: post?.username,
        title,
        desc
    })
    setUpdatePostToggle(false);
    window.location.reload();
    
   } catch (error) {
    console.log('error', error.message);
   }
}

  return (
    <div className='post col-md-9 mt-4'>
        <div className="post__container w-full px-3">
           {post.photo && <img src={`http://localhost:8080/images/${post?.photo}`}  className='img-fluid object-fit-cover' alt="" /> }
        
        <div className="d-flex align-items-center justify-content-center">
           {updatePostToggle === false ? 
            <h1 className=' mx-auto'>{post.title}.</h1>
            :
            <input type="text" className='form-control text-muted text-center p-2' placeholder={post?.title} name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
           }
        <div className="singlePostEdit ms-auto d-flex gap-3">
                <span className='text-primary icon' onClick={()=>setUpdatePostToggle(true)}><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></span>
                <span className='text-danger icon' onClick={deletePost}><FontAwesomeIcon  icon="fa-solid fa-trash" /></span>
            </div>
        </div>

        <div className="text-muted singlePostInfo d-flex justify-content-between fs-4 mb-4">
            <span>Author: <b>{post?.username}</b></span>
            <span>{new Date(post?.createdAt).toDateString()}</span>
        </div>
        
        {updatePostToggle === false ? (
             <p className="post-text text-start">
            {post.desc}
        </p>
        ):
        (
            <input type="text" className='form-control p-3' multiple={true} value={desc} placeholder='Description' onChange={(e)=> setDesc(e.target.value)} />
        )
        }

       
        {updatePostToggle && <button onClick={handleUpdate} className='btn btn-success text-uppercase fw-semibold mt-3 mx-auto d-block'>update</button>}
        </div>

    </div>
  )
}

export default SinglePost

