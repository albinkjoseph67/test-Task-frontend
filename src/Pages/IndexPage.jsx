import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Cards from './Cards';



function IndexPage() {

    const [discussions,setDiscussions] = useState([])


    useEffect(()=>{
      axios.get('/alldiscussions').then(response =>{
         setDiscussions(response.data);
        //  console.log(discussions);
      })
    },[]);

    



    // for search items
  const [query,setQuery] = useState("")

  const getFilteredItems = (query, discussions) =>{
    if(!query){
      return discussions;
    }
    return discussions.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase()));
  }

  const filteredItems = getFilteredItems(query, discussions)


    

  return (
    <div >
      <div><Cards/></div>
      
        <div className=' mt-8 gap-x-6 gap-y-8 grid  lg:grid-cols-1 border border-rounded '> 
        <div>
          <label className='  m-5 ' ><b>Search Discussions By Title</b></label>
          <input className='border-gray-500   p-5' type="text" onChange={(e) => setQuery(e.target.value)} />
          <>
            { filteredItems.map((value)=>(
              
              <div className='flex lg:grid-cols-1  hover:bg-sky-100 '>
                
              <Link className='flex items-center border border-gray-500 m-5 w-full'>
              
              <img className='w-16 md:w-32 lg:w-48 rounded-2xl object-cover m-5 '  src={value.photos} alt="no image" />
              <div className='m-5 '>
                <th className='underline'>TITLE</th> <br />
                  <td>{value.title} </td>
                  
              </div>
              <div className='m-5 space-x-2'>
                <th className='underline'>DESCRIPTION </th><br />
                  <td>{value.description}</td>
                 
              </div>
              


              </Link>
              <div className='  h-32 w-32  p-4 mt-3  items-center '> <button className='items-center mt-8 mx-3 bg-cyan-500 rounded-2xl w-16'>JOIN </button></div>
             

            </div>
            ))}

          </>
        </div>
        
  </div>

  <div className='bg-indigo-500 h-20'>
     <Footer/></div>
    </div>
    
  )
}

export default IndexPage