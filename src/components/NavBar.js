import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavBar=()=> {
  return (
    <div className='container' style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
        <div className='col-lg-5'>
        <div class="row" style={{display: "flex" ,alignItems:"center", justifyContent:"space-evenly"}}>
            <img class="col-lg-1 col-sm-1 "style={{width:"100px" }} src="https://images.squarespace-cdn.com/content/v1/59ab4a3fc027d8465d8be2f3/1632079981179-2DN29WOA5PX6W252VD0N/checklist+website+image.jpg" alt="" id="logo"/>
            <div class="col-lg-9 col-sm-5" id="title" ><h2><b>TODO LIST</b></h2></div>
            <div class="col-lg-2 col-sm-5"  style={{display:"flex", alignItems:"center"}}>
                <div><FontAwesomeIcon icon={faUserCircle} style={{fontSize:"40px"}} /></div>
                <div style={{marginLeft:"5px"}}><b>user Name</b> </div>
            </div>
        </div>  
        </div>
    </div>
  )
}

export default NavBar
