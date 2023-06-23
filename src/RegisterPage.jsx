import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function RegisterPage(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const location = useNavigate();

     async function registerUser(ev){
        // not to reload page
        ev.preventDefault();
      
        try {
          await  axios.post('/register',{
            name,
            email,
            password,
        });
        alert('Registration successfull. Now you can login')
        location('/login')
        }catch (e) {
          alert('Registration failed. Please try again later');
        }
        
     }


    return(
        <div className=' main mt-5 grow flex items-center justify-around'>
        <div className='mb-32'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
            <input required type="text" placeholder="your name"
             value={name}
             onChange={ev=>setName(ev.target.value)} />
          <input required type="email" placeholder='your@email.com'
              value={email}
              onChange={ev=>setEmail(ev.target.value)} />   
          <input required type="password" placeholder='password'
               value={password}
               onChange={ev=>setPassword(ev.target.value)} />
          <button className='primary'>Register</button>
            <div className='text-center py-2 text-gray-500'>
              Already a member?
              <Link className='underline text-black' to={'/login'}>Login</Link>
            </div>
        </form>
        </div>
        
      </div>
    )
}