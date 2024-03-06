import "./singleChat.scss";
import { useContext, useState, useEffect, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { LinearProgress } from "@mui/material";
import { userContext } from "../../../context/userContext";
import io from "socket.io-client";
import axios from "axios";
var socket, selectCompareChat;
function SingleChat() {
  const chatBoxRef = useRef(null);
  const { user, selectChat } = useContext(userContext);
  const [chats, setChats] = useState(null);
  const [message, setMessage] = useState("");
  const [isSocketCon, setIsSocketCon] = useState(false);

  useEffect(() => {
    socket = io("http://localhost:8000");
    socket.emit("setUp", user._id);
    socket.on("connected", () => {
      setIsSocketCon(true);
      console.log("connectd");
    });
    console.log("right rendered");
  }, []);

  // load messages
  useEffect(() => {
    async function fetchChats() {
      if (selectChat) {
        const { data } = await axios.get(
          `http://localhost:8000/api/message/${selectChat}`
        );
        socket.emit("joinRoom", selectChat);
        setChats([...data]);
      }
    }
    fetchChats();
  }, [selectChat]);

  console.log(chats);
  useEffect(() => {
    chatBoxRef.current?.scroll({
      top: chatBoxRef.current.scrollHeight,
    });
  }, [chats]);

  // handle to send message to backend
  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/message", {
        sender: user._id,
        chat: selectChat,
        message,
      });
      // console.log(send);
      socket.emit('newMessage',data);
      if (chats) setChats([...chats, data]);
      else setChats([data]);
      setMessage("");
    } catch (err) {
      console.log(err.message);
    }
  };
  return !chats ? (
    <LinearProgress />
  ) : (
    <div className="chat-box">
      <div className="chat-section" ref={chatBoxRef}>
        {chats.map((c) => {
          if (c.sender === user._id) {
            return (
              <div key={c._id} className={`message message-right arrow-right`}>
                <div className="box box-right">
                  <p className="text">{c.message}</p>
                  <div className="message-status">
                    {/* <span>2:00</span> */}
                    <span>
                      <DoneAllIcon fontSize="small" />
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div key={c._id} className="message message-left arrow-left">
              <div class="box box-left arrow-left">
                <p className="text">{c.message}</p>
                <div className="message-status">
                  {/* <span>2:00</span> */}
                  <span>
                    <DoneAllIcon fontSize="small" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="message-input-section">
        <input
          className="input-box"
          type="text"
          placeholder="type message"
          value={message}
          onChange={(e) => setMessage((m) => e.target.value)}
        />

        <div className="send-button" onClick={handleSendMessage}>
          <SendIcon />
        </div>
      </div>
    </div>
  );
}

export default SingleChat;
