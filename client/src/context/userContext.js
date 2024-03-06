import axios from "axios";
const { createContext, useState, useEffect } = require("react");

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [contactsList, setContactsList] = useState(null);
  const [selectChat,setSelectChat]=useState(null);
  const [selectUser,setSelectUser]=useState(null);

  async function fetchChats() {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        "http://localhost:8000/api/chat/",
        config
      );
      setContactsList([...data]);
    } catch (error) {
      // if(error.response.status == 401)setUser(null);
      localStorage.removeItem('user');
      setUser(null);
      console.log(error);
    }
  }
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    fetchChats();
    console.log("user called");
  }, [user]);

  // login handle
  const login = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        data
      );
      setUser(response.data);
      return response;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  // signup handle
  const signup = async ({ name, email, password }) => {
    console.log("called");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        { name, email, password }
      );
      return response.status;
    } catch (err) {
      throw new Error(err.response.data);
    }
  };

  // load chats

  return (
    <userContext.Provider value={{ user,setUser, login,selectUser,setSelectUser, signup,selectChat,setSelectChat,contactsList,setContactsList}}>
      {children}
    </userContext.Provider>
  );
};
