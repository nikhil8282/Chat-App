import React, { useContext } from "react";
import logo from "../../../../images/user-logo.webp";

import "./userContact.scss";
import { userContext } from "../../../../context/userContext";
const UserContact = ({ u, currentUser }) => {
  const { setSelectChat, setSelectUser } = useContext(userContext);
  const { latestMessage } = u;
  const { name, profilePic } = currentUser;
  // console.log(latestMessage);
  // console.log(currentUser);
  return (
    <div
      className="contact-box"
      onClick={() => {
        setSelectChat(u._id);
        setSelectUser(currentUser);
      }}
    >
      <span className="users-profile">
        <img src={profilePic ? profilePic : logo} />
      </span>
      <div className="mid-box">
        <div className="users-details">
          <span className="users-name">{name}</span>
          <span className="msg-time">Friday</span>
        </div>
        <div className="msg-details">
          {latestMessage &&
            (latestMessage.sender._id === currentUser._id ? (
              <p className="msg-txt">{latestMessage.message}</p>
            ) : (
              <p className="msg-txt">{`you:${latestMessage.message}`}</p>
            ))}
          {/* <div className='msg-count'><span>6</span></div>  */}
        </div>
      </div>
    </div>
  );
};

export default UserContact;
