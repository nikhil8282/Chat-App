import React, { useContext } from 'react'
import profile from '../../../images/group-photo.jpg'
import logo from "../../../images/user-logo.webp"

import './userContact.scss'
import { userContext } from '../../../context/userContext'
const UserContact = ({u,currentUser}) => {
  // console.log(currentUser);
  const {setSelectChat}=useContext(userContext);

  const {name,profilePic}=currentUser;
  return (
    <div className='contact-box' onClick={()=>{setSelectChat(u)}}>
        <span className="users-profile">
        <img src={profilePic?profilePic:logo}/>
        </span>
        <div className="mid-box">

        <div className="users-details">
        <span className='users-name'>{name}</span>
        <span className="msg-time">Friday</span>
        </div>
        <div className="msg-details">
            <p className='msg-txt'>you:😱😰😱😱😰😱</p>
            <div className='msg-count'><span>6</span></div> 
        </div>
        </div>
        
    </div>
  )
}

export default UserContact