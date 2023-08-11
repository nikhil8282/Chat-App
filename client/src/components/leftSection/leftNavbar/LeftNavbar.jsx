import React from 'react'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MessageIcon from '@mui/icons-material/Message';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import logo from "../../../images/user-logo.webp"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import './leftNavbar.css';

function LeftNavbar() {
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
          <input type="text" />

          
        </div>
          <span className='filter-icon'>
          <FilterListIcon/>
          </span>
      </div>
    </div>
  )
}

export default LeftNavbar