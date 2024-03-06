import { Box, LinearProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
// import UserList from "../usersList/UserList";
import './groupModal.scss'
import defaultProfile from '../../../images/user-logo.webp'
// import './userList.scss'

function UserList({ userList,selectUser,groupUsers }) {
  // const {setselectUser}=useContext(userContext);
  return (
    <div className="users-list">
      {userList?.slice(0,4).map((u, i) => {
          return (
            <div className={`user ${groupUsers?.some(g=>g._id===u._id)?"selected":""}`} key={u._id} onClick={()=>{selectUser(u)}}>
              <span className='profile'>
                <img src={defaultProfile} alt="" />
              </span>
              <span className='name'>{u.name}</span>
            </div>
          );
        })}
          </div>
  );
}

const GroupModal = ({ handleClose, search }) => {
  const [groupUsers, setGroupUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [load, setLoad] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    p: 2,
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setSearchUsers([]);
      return;
    }
    try {
      setLoad(true);
      const data = await search(e.target.value);
      setSearchUsers([...data]);
      setLoad(false);
    } catch (err) {
      console.log(err);
      setLoad(false);
    }
  };
  const selectUser = (user) => {
    const hasUser = groupUsers.some(u=>u._id === user._id);
    if(hasUser){
      setGroupUsers((u) => {
        return u.filter(i=>i._id!==user._id);
      });
      return;
    }
    setGroupUsers((u) => {
      return [...u, user];
    });
  };
  console.log(groupUsers);
  const handleRemove =(id)=>{
    setGroupUsers(u=>{
      return u.filter(i=>{
        return i._id !== id
      })
    })
  }
  return (
    <Box sx={style}>
      <h2 style={{ textAlign: "center", padding: "4px" }}>Create group chat</h2>
      <div
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      >
        <CloseIcon onClick={handleClose} />
      </div>
      <div className="g-users">{groupUsers.map(u=>{
        return (
          <div className="g-user" key={u._id}><span className="g-name">{u.name}</span><span className="g-close" onClick={()=>{handleRemove(u._id)}}><CloseIcon fontSize="small"/></span></div>
        )
      })}</div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin:"10px"
        }}
      >
        <input
          placeholder="search user"
          type="text"
          style={{
            width: "200px",
            padding: "5px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid black",
          }}
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button
          style={{
            fontSize: "18px",
            marginLeft: "5px",
            padding: "4px",
            border: "1px solid black",
            borderRadius: "4px",
            background: "#56d9ff",
          }}
        >
          create
        </button>
      </form>
      {searchUsers.length !== 0 &&
        (load ? (
          <LinearProgress />
        ) : (
          <UserList userList={searchUsers} groupUsers={groupUsers}/>
        ))}
    </Box>
  );
};

export default GroupModal;
