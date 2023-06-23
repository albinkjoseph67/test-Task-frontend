import React from 'react'
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import MyDiscussion from './MyDiscussion';
import Footer from '../Footer';


function AccountPage() {

    const [redirect,setRedirect] = useState(null);
    const {ready,user,setUser} = useContext(UserContext);

    async function logout(){
        await  axios.post('/logout')
        setUser(null);
        setRedirect('/');
     }
    
 
     if(!ready) {
         return 'Loading.....';
     }
 
 
     if(ready && !user && !redirect) {
         return <Navigate to={'/'}/>
     }
 
     if(redirect) {
         return <Navigate to={redirect}/>
     }


  return (
    <div>
        <div className='text-center max-w-lg mx-auto mt-5'>
        <b className='text-2xl'>Logged in as {user.name} </b> <br /> <br/>
            <div className='flex'>
                <button className='primary max-w-lg mt-5 mx-5 ' ><Link to={'adddiscussion'}>Add new discussion</Link></button>
                <button onClick={logout} className="primary max-w-lg mt-5  ">Logout</button>
            </div>

        </div>
         <div className="text-center max-w-lg mx-auto">
                  <br /> <br/>
                  <div><MyDiscussion/></div><br />
            </div>
            <Footer/>
    </div>
  )
}

export default AccountPage