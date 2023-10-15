import React, {useState, useContext } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import "./login.scss"
import {userContext} from '../../context/userContext';
import { Alert, Backdrop, CircularProgress } from '@mui/material';
export default function Login(){
  const {login}=useContext(userContext);
  const [err, seterr] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [formD, setformd] = useState({ email: "", password: ""});

  // handle onChange event
  const handleChange = (e) => {
  
    setformd(p=>({ ...p, [e.target.name]: e.target.value }))
  }
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setOpen(true)
    try {
    
      const response = await login(formD);
      if (response.status){
        navigate("/");
         setOpen(false);
      }
      // navigate("/login");
    } catch (error) {
      setOpen(false);
      setTimeout(() => {
        seterr(null);
      }, 3000);
      seterr(error.message);
    }
  };
  
  // console.log(Err)

  return(
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>
            Hello world.
            </h1>
            <p>To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be </p>
            <span>
                Do you have an account?</span>
                <Link to='/signup'>

                <button>
                  signup</button>
                </Link>

          </div>
          <div className='right'>
            <h1>Login</h1>
            <form>

            <input type='email' name='email' value={formD.email} onChange={handleChange} placeholder='email'/>
            <input type='password' name='password' value={formD.password} onChange={handleChange} placeholder='password'/>
            {
            err &&
             <Alert severity='warning'>
                {err}                  
              </Alert>
            
            }
  
            <button onClick={handleLogin}>login</button>
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
  )
}