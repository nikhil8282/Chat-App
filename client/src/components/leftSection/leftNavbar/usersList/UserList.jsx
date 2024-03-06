import { useContext } from "react";
import defaultProfile from "../../../../images/user-logo.webp";
import "./userList.scss";
import { userContext } from "../../../../context/userContext";
import axios from "axios";
export default function UserList({ userList,setInputValue}) {
  const {contactsList,setContactsList,setSelectUser,setSelectChat,user}=useContext(userContext);
  const config={
    headers:{
      Authorization:`Bearer ${user.token}`
    }
  }
  const handleClick =async(u)=>{

    try {
      const res=await axios.post('http://localhost:8000/api/chat',{userId:u._id},config)
      console.log(res);
      setInputValue("");
      setContactsList([...contactsList,res.data[0]]);
      setSelectUser(u);
      setSelectChat(res.data[0]._id);
    } catch (error) {
      console.log(error);


    }
  
  }
  return (
    <div className="users-list">
      {userList?.slice(0, 4).map((u, i) => {
        return (
          <div
            className={`user`}
            key={u._id}
            onClick={()=>handleClick(u)}
          >
            <span className="profile">
              <img src={defaultProfile} alt="" />
            </span>
            <span className="name">{u.name}</span>
          </div>
        );
      })}
    </div>
  );
}
