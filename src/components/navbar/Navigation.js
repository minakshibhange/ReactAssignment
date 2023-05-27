import React from 'react';
import './Nav.css';
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top">
    <div className="container">
        <img src='https://bt.hcmiu.edu.vn/wp-content/uploads/2019/09/0.png' width='60px' />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
         <div className="topnav-right">
                <a href="#">Notification <i className='fa fa-bell'></i>  </a>
            </div>
    </div>
</nav>
  )
}
