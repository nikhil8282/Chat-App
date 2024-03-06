import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import { useContext, useState } from 'react';
import Home from './pages/home/Home';
import { userContext } from './context/userContext';
function App() {
  const {user}=useContext(userContext);
  // console.log(user);
  const ProctectRoute =({children})=>{
    if(user)return children;
    return <Navigate to="/login"/>
  }
  const router = createBrowserRouter([
    {
      path:'/',element:<ProctectRoute><Home/></ProctectRoute>
    },
    {
      path:'/signup',element:user?<Navigate to="/"/>:<SignUp/>
    },
    {
      path:'/login',element:user?<Navigate to="/"/>:<Login/>
    }
  ])
  return <RouterProvider  router={router }/>;
}

export default App;
