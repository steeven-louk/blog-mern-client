import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sidebar = () => {
  return (
    <div className="col-md-3" style={{ 'width':'260px' }}>
      <div className="sidebarItem">
        <div className="sidebar-title">
          <span className="text-uppercase mb-4 fw-bold text-center d-block border-top border-bottom">
            about me
          </span>
          <img
            src="./assets/feed-image-1.png"
            
            className="img-fluid rounded-2"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            distinctio pariatur eaque harum maxime aspernatur unde tempora.
          </p>
        </div>
      </div>
      <div className="sidebarItem">
        <span className="text-uppercase my-3 text-center d-block fw-bold border-top border-bottom">
          categories
        </span>

        <div className="sidebarList">
          <ul className="d-inline-flex gap-5 flex-wrap">
            <li>life</li>
            <li>music</li>
            <li>style</li>
            <li>sport</li>
            <li>tech</li>
            <li>cinema</li>
          </ul>
        </div>
      </div>

      <div className="sidebarItem">
        <span className="text-uppercase my-3 text-center d-block border-top border-bottom fw-bold">
          follow us
        </span>

        <div className="sidebarList d-flex gap-3 align-items-center justify-content-center">
          <li>
            <FontAwesomeIcon icon="fa-brands fa-square-facebook"  style={{ 'width':'25px','height':'25px' }} />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-square-twitter"  style={{ 'width':'25px','height':'25px' }} />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-square-pinterest"  style={{ 'width':'25px','height':'25px' }} />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-square-instagram"  style={{ 'width':'25px','height':'25px' }} />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
