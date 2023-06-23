import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';


function MyDiscussion() {

  
  const [mydiscussion,setMydiscussion] = useState([]);

  useEffect(() => {
        
        axios.get('/discussions').then(({data}) =>{
            setMydiscussion(data)
        })
  },[]);
  


  return (
    <>
      <div>
        <div><h1><b>MY DISCUSSSIONS</b></h1></div>
          {  mydiscussion.length > 0 && mydiscussion.map(data =>(
            
              <div className='border border-gray-500 p-5 p-5'>
                <Link className='flex border border-gray-500 hover:bg-green-100' to={'/edit/'+data.id} >
                <img className='w-16 md:w-32 lg:w-48 rounded-2xl object-cover m-5' src={data.photos} alt="No Image" />
    
                    <h1 className='text-center mt-10'>{data.title}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mt-10 mx-10 ">
    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
  </svg>
  
  
                </Link>
              </div>
          ))}
          
      </div>
      
    </>
    
  )
}

export default MyDiscussion