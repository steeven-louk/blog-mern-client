import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import './style.scss'

const SinglePost = () => {


//     const id = useParams();
//     const [post, setPost] = useState({})

//   useEffect(() => {
//         const getSinglePost = async () =>{
//             try{
               
//                 console.log(post)
//             }catch(err){
//                 console.log('err',err)
//             }
//         }
//         getSinglePost();
//   }, [post]);

  return (
    <div className='post col-md-9 mt-3'>
        <div className="post__container w-full px-3">
            <img src="./assets/feed-image-1.png"  className='img-fluid object-fit-cover' alt="" />
        
        <div className="d-flex align-items-center justify-content-center">
            <h1 className=' mx-auto'>Lorem, ipsum dolor.</h1>
        <div className="singlePostEdit ms-auto d-flex gap-3">
                <span className='text-primary icon'><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></span>
                <span className='text-danger icon'><FontAwesomeIcon  icon="fa-solid fa-trash" /></span>
            </div>
        </div>

        <div className="text-muted singlePostInfo d-flex justify-content-between fs-4 mb-4">
            <span>Author: <b>Ishi</b></span>
            <span>1 hour ago</span>
        </div>
        
        <p className="post-text text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, autem vel laborum porro iure saepe cupiditate, alias fuga consequatur fugit cum amet unde magni, est eius. Et id voluptatum assumenda?
            Aliquam voluptate quam consectetur sapiente et, iure labore rerum voluptatibus eius veniam corporis, vitae obcaecati molestias in, non placeat dicta asperiores explicabo! Impedit, numquam! Quibusdam voluptas ex placeat sit quo.
            Labore laborum nulla illo! Illum possimus, dolore nostrum ipsa voluptatibus est perspiciatis magnam repudiandae quo sunt corrupti ratione similique corporis. Accusamus aspernatur adipisci iste asperiores tempora minus natus saepe quisquam?
            Error magnam dolorum eius architecto eos iure alias accusamus pariatur dignissimos quasi esse saepe, necessitatibus, quam minima quo ex nulla facere repellat. Suscipit fugiat a veniam incidunt at eveniet asperiores.
            Accusantium distinctio enim exercitationem, saepe corrupti voluptates autem sunt quaerat, ducimus doloremque obcaecati id qui est harum dolor deleniti. Dolorem nihil earum cum quae aut officiis culpa, distinctio excepturi consequatur?
            Suscipit culpa, tempora ab, voluptatibus soluta nulla harum modi adipisci amet officiis neque reiciendis! Natus fugiat necessitatibus esse repellat? Et provident dolore cupiditate voluptatibus in omnis tempora ut itaque tempore!
            Rem eaque praesentium veniam harum totam numquam repellendus tenetur blanditiis corporis expedita, fugit debitis iure est dolores dolore doloribus quas illo vitae beatae consequatur soluta qui fugiat? Magnam, omnis aspernatur.
            Soluta omnis voluptatem iusto laudantium. Odio dolorem, praesentium minus perspiciatis ipsam reiciendis, doloremque fugiat provident, quidem consequatur ducimus. Assumenda cum voluptas officia officiis delectus fugit. Commodi delectus quos nulla tenetur.
            Nostrum placeat, harum ut magnam doloremque minima saepe, provident excepturi maxime voluptatem nihil. Asperiores eos officia laudantium ad magni necessitatibus distinctio praesentium totam, dignissimos cum deserunt, pariatur dolor consequuntur nihil?
            Vel mollitia sint tenetur ullam voluptate eos, nam modi incidunt minus deserunt, assumenda, voluptatibus libero itaque impedit. Sint deserunt possimus, consequatur eligendi expedita optio eveniet, tempore eum harum esse ducimus.
            Voluptates reprehenderit dolores magni libero delectus atque itaque dignissimos sint expedita nam ipsum porro assumenda doloremque, eum minima dolore quas quam consequatur architecto earum harum obcaecati ratione quasi! Quidem, nisi.
            Iste, tenetur et exercitationem sunt maxime voluptatibus nobis unde dicta laboriosam culpa itaque! Iusto nemo magnam dicta? Consequatur reiciendis, cupiditate distinctio maxime sint consectetur eos sed, dignissimos atque velit odit!
            Facilis voluptate doloremque recusandae animi debitis ipsam reiciendis sunt fugit itaque ab cumque ea eligendi laborum nisi, dolores, atque perferendis a inventore consequuntur cupiditate hic? Expedita numquam doloremque natus esse.
            Architecto porro ea eos tempora, veritatis cupiditate excepturi atque. Doloremque voluptate illo deleniti ea fugit suscipit obcaecati non animi, nemo, aliquid beatae, fuga autem accusantium explicabo officiis laborum nesciunt est.
            Natus facere deserunt ab consectetur commodi voluptates odit placeat id ipsa explicabo eveniet possimus laboriosam, provident non harum magni debitis eaque molestias soluta qui magnam pariatur iste nemo temporibus? Cumque!
        </p>
        </div>
      
    </div>
  )
}

export default SinglePost