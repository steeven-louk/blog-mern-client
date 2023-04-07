import React, { useEffect, useState } from 'react'
import Posts from '../components/posts/Posts'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header';
import axios from 'axios';


const Homepage = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
 const getPosts = async ()=>{
  try{
    setLoading(true);
    const data = await axios.get('http://localhost:8080/api/post');
    if(data.status === 200){
      setLoading(false);
      setPosts(data.data);
        }
    
  }catch(err)
  {
    console.log(err);
  }
 }

 getPosts();
}, []);

// console.log(posts)

return (
    <>
      <Header/>
      

      <div className="home-container d-flex px-5 mt-4">
      <Posts posts={posts} loading={loading}/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Homepage