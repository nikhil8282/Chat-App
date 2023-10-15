import React, { useEffect, useState } from 'react'
import './rightNavbar.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo from "../../../images/user-logo.webp"
function RightNavbar({currentUser}) {
  return (
    <div className='r-nav-bar'>
      {/* <div classkName="left"> */}
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        <div className="user-name">
          <span className='name'>{currentUser?.name}</span>
          <span className='time'>online</span>
        </div>
      {/* </div> */}
      {/* <div className="right"> */}
        <div className="three-dots"><MoreVertIcon/></div>
      {/* </div> */}
    </div>
  )
}

export default RightNavbar