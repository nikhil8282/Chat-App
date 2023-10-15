import "./right.scss";
import React, { useContext,useState, useEffect, useRef } from "react";
import RightNavbar from "./rightNavbar/RightNavbar";
import SendIcon from "@mui/icons-material/Send";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { userContext } from "../../context/userContext";
import axios from 'axios';

import { getUser } from "../../config";
import { set } from "mongoose";
const RightBar = () => {
  const chatBoxRef = useRef(null);
  const {user,selectChat}=useContext(userContext);
  const [chats,setChats]=useState([]);
  const [message,setMessage]=useState("");

  useEffect(()=>{
    async function fetchChats(){
      if(selectChat){const {data}=await axios.get(`http://localhost:8000/api/message/${selectChat._id}`)
      setChats([...data]);}
  } 
  fetchChats();
},[]);

console.log(chats);
  useEffect(() => {
    chatBoxRef.current?.scroll({
      top: chatBoxRef.current.scrollHeight,
      // behavior: "smooth",
    });
    // console.log(selectChat);
  }, []);

  const handleSendMessage= async(e)=>{
    e.preventDefault();
    try{
      setChats([...chats,message]);
    const send = await axios.post('http://localhost:8000/api/message',{sender:user._id,chat:selectChat._id,message});
console.log(send);
setMessage("");    
        }catch(err){
          console.log(err.message);
        }
    
  }
  return (
    <div className="right-bar">
      <RightNavbar currentUser={selectChat?.users[0]._id===user._id?selectChat?.users[1]:selectChat?.users[0]}/>
      {
        selectChat && 
      <div className="chat-box">
        <div className="chat-section" ref={chatBoxRef}>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-right arrow-right">
            <div class=" box box-right">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque! accusamus, delectus eaque! accusamus,
                delectus eaque! accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
          <div className="message message-left arrow-left">
            <div class="box box-left arrow-left">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum aut adipisci officia alias animi magni odit nam,
                accusamus, delectus eaque!
              </p>
              <div className="message-status">
                <span>2:00</span>
                <span>
                  <DoneAllIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="message-input-section">
          <input className="input-box" type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />

          <div className="send-button" onClick={handleSendMessage}>
            <SendIcon />
          </div>
        </div>
      </div>
  }
    </div>
  );
};

export default RightBar;
