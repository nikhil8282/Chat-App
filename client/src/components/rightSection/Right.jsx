import RightNavbar from "./rightNavbar/RightNavbar";
import SingleChat from "./chatSection/SingleChat";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
const RightBar = () => {
const {selectChat}=useContext(userContext);  
// console.log(chats);
  // console.log(selectChat);
  return (
    <div className="right-bar">
      <RightNavbar/>
      {selectChat && <SingleChat/>}
    </div>
  );
};

export default RightBar;
