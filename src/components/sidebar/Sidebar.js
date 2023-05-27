import React from 'react';
import Main from '../main/Main';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-sm-2'>
        <div className='col-auto min-vh-100 bg-white'>
         <ul>
            <li>
                <a href="/#" className='nav-link px-3'>
                <i class="fa fa-dashboard "></i><span className='ms-1 d-sm-inline'>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3' >
                <i class="fa fa-file "></i><span className='ms-1 d-sm-inline'>User Management</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3'>
                <span className='ms-1 d-sm-inline'>Health Carers</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3'>
                   <span className='ms-1 d-sm-inline'>Support Cordinatiors</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3'>
                     <span className='ms-1 d-sm-inline'>Clients</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3'>
                    <span className='ms-1 d-sm-inline'>Service Providers</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3 active'>
                <i class="fa fa-shield "></i> <span className='ms-1 d-sm-inline'>Appointments</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3'>
                <i class="fa fa-file "></i>  <span className='ms-1 d-sm-inline'>Offboarding</span>
                </a>
            </li>
            
         </ul>
         <ul className='another-sidebar-menu'>
            <li>
                <a href="/#" className='nav-link px-3'>
                <i class="fa fa-light fa-gear "></i>  <span className='ms-1 d-sm-inline'>Setting</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3'>
                <i class="fa fa-light fa-arrow-right-from-bracket "></i><span className='ms-1  d-sm-inline'>Log Out</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3'>
                <i class="fa fa-shield "></i> <span className='ms-1  d-sm-inline'>Privacy Policy</span>
                </a>
            </li>
            <li>
                <a href="/#" className='nav-link px-3'>
                <i class="fa fa-phone "></i>  <span className='ms-1 d-sm-inline'>01184-21422-254</span>
                </a>
            </li>
            
         </ul>
        </div>
        </div>
        <div className='col-sm-10'>
            <Main></Main>
        </div>
    </div>
</div>
  )
}

export default Sidebar;