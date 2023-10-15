import React, { useContext, useState } from 'react'
import './home.css'
import Left from '../../components/leftSection/Left.jsx'
import Right from '../../components/rightSection/Right.jsx'
import { userContext } from '../../context/userContext'

const Home = () => {
const {selectChat}=useContext(userContext);
  
  return (
    <div className='home'>
    <div className="left">
    <Left/>

    </div>
    <div className="right">
    <Right/>        

    </div>
    </div>
  )
}

export default Home



