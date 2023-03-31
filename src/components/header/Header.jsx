import React from 'react';

import './style.scss';

const Header = () => {
  return (
    <div className='header position-relative'>
            <div className="header-title text-capitalize position-absolute  d-flex text-center flex-column">
              <span>react & node</span>
              <span>blog</span>
            </div>

            <img src="./assets/feed-image-1.png" alt="" />
    </div>
  )
}

export default Header