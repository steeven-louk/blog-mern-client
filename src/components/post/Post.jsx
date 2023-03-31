import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export const Post = ({post}) => {


  return (
    <Link to={`/post/${post?._id}`} className="card  m-2 border-0 col-5">
      <img
        src="./assets/feed-image-1.png"
        alt=""
        className=" card-img-top"
      />

      <div className="card-body d-flex flex-column text-center">
        <div className="post-cats d-inline-flex mx-auto gap-2">
          <span>Music</span>
          <span>Life</span>
        </div>

        <h2 className="card-title text-start"> {post?.title} </h2>

        <hr />
        <span className="post-date text-muted mb-3">{new Date( post?.createdAt).toDateString()}</span>
        <p className="post-desc text-start">{post?.desc} </p>
      </div>
    </Link>
  );
};
