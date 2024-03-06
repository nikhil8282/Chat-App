import React, { useContext, useState } from "react";
import "./signUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

// export default function SimpleBackdrop() {

// return (
// <div>
//   <Button onClick={handleOpen}>Show backdrop</Button>
//   <Backdrop
//     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//     open={open}
//     onClick={handleClose}
//   >
//     <CircularProgress color="inherit" />
//   </Backdrop>
// </div>
// );
// }
export default function SignUp() {
  const [formD, setformd] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [err, seterr] = useState(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  

  const { signup } = useContext(userContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformd((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const hadleSignUp = async (e) => {
    e.preventDefault();
    try {
      setOpen(true);
      if (formD.confirmPassword !== formD.password) {
        throw new Error("confirm password is not same!");
      }

      const status = await signup(formD);
      if (status) {
        setStatus("success");
        setformd({name:"",email:"",password:"",confirmPassword:""});
        setOpen(false);
        setTimeout(() => {
          seterr(null);
        }, 3000);
        seterr("you signed up successfully!!");
        // navigate("/login");
      }
      // navigate("/login");
    } catch (err) {
      setStatus("warning")
      setOpen(false);
      setTimeout(() => {
        seterr(null);
      }, 3000);
      seterr(err.message);
    }
  };

  return (
    <div className="SignUp">
      <div className="card">
        <div className="right">
          <h1>Hi, whatsapp</h1>
          <p>let's chat with people and share our thouths! </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="left">
          <h1>Sign Up</h1>
          <form>
            <input
              type="text"
              value={formD.name}
              onChange={handleChange}
              name="name"
              placeholder="name"
            />
            <input
              type="email"
              value={formD.email}
              name="email"
              onChange={handleChange}
              placeholder="email"
            />

            <input
              type="password"
              value={formD.password}
              name="password"
              onChange={handleChange}
              placeholder="password"
            />

            <input
              type="text"
              value={formD.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              placeholder="confirm password"
              required
            />
           {
            err &&
             <Alert severity={status}>
                {err}                  
              </Alert>
            
            }
  
            <button onClick={hadleSignUp}>Sign Up</button>
          </form>
          <div>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        </div>
      </div>
    </div>
  );
}
