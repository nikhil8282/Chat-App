import React from 'react'
import LeftNavbar from './leftNavbar/LeftNavbar'
import './left.css'
import UserContact from './contactList/UserContact'

function LeftBar() {
  const users =[{name:'Disha',profilePic:"https://pps.whatsapp.net/v/t61.24694-24/299307049_843937250191113_2609758814280875824_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRumvSFb6TMx9uPg8v9Kj-oYSBf2qr3ylyzORuaR9tIEg&oe=64C1F0FA"},{name:'Nandini',profilePic:"https://pps.whatsapp.net/v/t61.24694-24/356967186_262733956465745_5946619456226330543_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdT3I6Jk7MDEPSsL--Beq-pP3m1DzI4KgcVAie9JW4PN7w&oe=64C6050E"},{name:"Areeba",profilePic:"https://pps.whatsapp.net/v/t61.24694-24/357278696_1406595496863573_6656709250703497521_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTp7F7Kh7duV5CsEFwVzCEsCl3b3TGE4j2jct7yBn-8XQ&oe=64C5D430"},{name:'Aman',profilePic:""},{name:'Harsh',profilePic:"https://pps.whatsapp.net/v/t61.24694-24/322290232_1544533936014976_5620334414623547061_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTSAltNwqtwLGFSGKzoljAZ_xvGFLp1F-t2XZLxwqo8dQ&oe=64C5F733"}]
  return (
    <div className='LeftBar'>
        <LeftNavbar/>
        {
          users.map(u=>(<UserContact name={u.name} profilePic={u.profilePic}/>))
        }
       
    
    </div>
  )
}

export default LeftBar