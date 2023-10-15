import axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [selectChat,setSelectChat]=useState(null);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const login = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        data
      );
      setUser(response.data);
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.response.data);
      console.log(error);
    }
  };
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

  return (
    <userContext.Provider value={{ user, login, signup,selectChat,setSelectChat}}>
      {children}
    </userContext.Provider>
  );
};
