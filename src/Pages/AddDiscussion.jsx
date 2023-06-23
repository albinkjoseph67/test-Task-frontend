import axios from 'axios';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function AddDiscussion() {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [photoLink,setPhotoLink] = useState('');
    const [id,setId] = useState('');
    const [redirect,setRedirect] = useState(false);


    // adding new discussion details
    async function saveDiscussion (ev){
        ev.preventDefault();
        const Data = {
            id,title,description,photoLink,
        }
        if(id) {
              // add new place
              await axios.post('/newDiscussion', Data);
              alert('Adding discussion successfull..')
              window.location.reload();
              
        }else{
            
            alert('Adding discussion failed')
            setRedirect(true);
        }
       
    }

    if (redirect){
        return <Navigate to={'/account/adddiscussion'}/>
    }



  return (
    <div className=' dis mt-10  text-center grid justify-items-center'>
         <form onSubmit={saveDiscussion} className='mt-10 max-w-lg text-center ' >
                       <input type="text" value={id} onChange={ev => setId(ev.target.value)} placeholder="id" />
                        
                       <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example:HTML Session" />

                       
                       <input type="text" value={description} onChange={ev => setDescription(ev.target.value)} placeholder="description" />

                       <input type="text" value={photoLink} onChange={ev => setPhotoLink(ev.target.value)} placeholder={'photo link link....jpg'} />

                       
                       
                        <div>
                            <button className="primary my-4"> Save</button>
                            </div>         
                    </form>
    </div>
  )
}

export default AddDiscussion