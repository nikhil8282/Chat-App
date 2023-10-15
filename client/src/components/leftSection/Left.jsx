import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import LeftNavbar from './leftNavbar/LeftNavbar'
import './left.scss'
import UserContact from './contactList/UserContact'
import { userContext } from '../../context/userContext';
import {getUser} from '../../config'

function LeftBar() {
  const [contactsList,setContactLists]=useState([]);
  const {user}=useContext(userContext);

  useEffect(()=>{
    async function fetchChats(){
      try {
        const config={
          headers:{    
            Authorization:`Bearer ${user.token}`
          }
        }
        const {data}=await axios.get('http://localhost:8000/api/chat/',config);
        
        // data.forEach(u => {
        //   setContactLists([...contactsList,...u.users])        
        // });
        setContactLists([...data]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchChats();
  },[user]);
  console.log(contactsList);
  return (
    <div className='LeftBar'>
        <LeftNavbar/>
        <div className="user-lists">

        {
          contactsList.map((u,i)=>(<UserContact key={i} u={u} currentUser={getUser(user,u.users)} />))
        }
        </div>
       
    
    </div>
  )
}

export default LeftBar