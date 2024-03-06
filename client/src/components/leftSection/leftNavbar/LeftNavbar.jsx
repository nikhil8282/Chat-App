import React, { useContext, useState } from "react";
import "./leftNavbar.css";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MessageIcon from "@mui/icons-material/Message";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import logo from "../../../images/user-logo.webp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { userContext } from "../../../context/userContext";

import { LinearProgress, Modal } from "@mui/material";
import GroupModal from "../modal/GroupModal";
import UserList from "./usersList/UserList";

function LeftNavbar() {
  const [inputValue, setInputValue] = useState("");
  const [load, setLoad] = useState(false);
  const [userList, setUserList] = useState([]);
  const { user } = useContext(userContext);

  // modal states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const search = async (name) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:8000/api/auth/user?search=${name}`,
        config
      );
      return data;
    } catch (error) {
      console.log(error);
      // throw new Error(error);
    }
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const data = await search(inputValue);
      console.log(data);
      setUserList(data);
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };
// handle remove search results
const handleRemove = ()=>{
  setInputValue("");
  setUserList([]);
}
// console.log("jjhh");
  return (
    <div className="l-nav-bar">
      <div className="top-nav">
        <div className="user-logo">
          <img src={user.profilePic} alt="logo" />
        </div>
        <div className="options">
          <div className="chats">
            <MessageIcon />
          </div>
          <div className="status">
            <DonutLargeIcon />
          </div>
          <div className="three-dots">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="input-field">
          <span className="search-icon">
            <SearchIcon />
          </span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue((prev)=>e.target.value);
            }}
          />
          {inputValue && (
            <span
              className="close-icon"
              onClick={handleRemove}
            >
              <CloseIcon fontSize="small" />
            </span>
          )}
        </div>
        <div className="filter-icon">
          {inputValue.length ? (
            <span onClick={handleSearch}>
              <SendIcon />
            </span>
          ) : (
            <GroupsOutlinedIcon
              titleAccess="create group"
              onClick={handleOpen}
            />
          )}
        </div>
      </div>
      {load ? <LinearProgress /> : <UserList userList={userList} setInputValue={setInputValue} handleRemove={handleRemove}/>}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <GroupModal handleClose={handleClose} search={search} />
        </Modal>
      </div>
    </div>
  );
}

export default LeftNavbar;
