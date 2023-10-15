import React, { useContext, useState } from 'react'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MessageIcon from '@mui/icons-material/Message';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import logo from "../../../images/user-logo.webp"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import './leftNavbar.css';
import axios from 'axios';
import { userContext } from '../../../context/userContext';

function LeftNavbar() {
  const [inputValue,setInputValue]=useState("");
  const [load,setLoad]=useState(false)
  const [userList,setUserList]=useState([]);
  const {user}=useContext(userContext);
  const handleSearch = async(e)=>{
    e.preventDefault();
    try {
      const config={
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      }
      const {data}=await axios.get(`http://localhost:8000/api/auth/user?search=${inputValue}`,config);
      console.log(data);
      setUserList(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='l-nav-bar'>
      <div className='top-nav'>
        <div className='user-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='options'>
          <div className='groups-icon'>
            <GroupsOutlinedIcon/>
          </div>
          <div className='chats'>
            <MessageIcon/>
          </div>
          <div className='status'>
            <DonutLargeIcon/>
          </div>
          <div className='three-dots'>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
      <div className='bottom-nav'>
        <div className="input-field">
          <span className='search-icon'><SearchIcon/></span>
          <input type="text" value={inputValue}  onChange={(e)=>{setInputValue(e.target.value)}}/>
          {inputValue && <span className="close-icon" onClick={()=>{setInputValue("");setUserList([])}}><CloseIcon fontSize='small'/></span>}
        </div>
          <div className='filter-icon'>
            {
            inputValue.length?
            <span onClick={handleSearch}><SendIcon /></span>:
            <FilterListIcon/>
          }
          </div>
      </div>
      <div className="users-lists">
        {
          userList.map((u,i)=>{
            return (
              
              <div className='user'>
                <span><img src='' alt="" /></span>
                <span>{u.name}</span>
              </div>
              
            )
          })
        }
      </div>
    </div>
  )
}

export default LeftNavbar