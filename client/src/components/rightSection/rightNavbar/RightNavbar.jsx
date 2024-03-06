import React, { useContext, useEffect, useState } from 'react'
import './rightNavbar.scss'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import logo from "../../../images/user-logo.webp"
import { userContext } from '../../../context/userContext';
function RightNavbar() {
  const {setUser,selectUser}=useContext(userContext)
  const handleLogout = ()=>{
    setUser(null)
    localStorage.removeItem("user");
  }

  return (
    <div className='r-nav-bar'>
      {/* <div classkName="left"> */}
        <div className="logo">
          {
            selectUser && (<img src={selectUser.profilePic||logo} alt="" />
              )
          }
        </div>
        <div className="user-name">
          <span className='name'>{selectUser?.name}</span>
          {selectUser && 
          <span className='time'>online</span>
          }
        </div>
      {/* </div> */}
      {/* <div className="right"> */}
        <div className="three-dots" onClick={handleLogout}><LogoutOutlinedIcon/> logout</div>
      {/* </div> */}
    </div>
  )
}

export default RightNavbar