import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditDiscussion() {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [photoLink,setPhotoLink] = useState('');
    const [id,setId] = useState('');
    const params = useParams()
    // console.log(params.id);

    const location = useNavigate()


// get particular discussion
    const getDiscussion = async ()=>{
        const {data} = await axios.get('/get-discussion/'+params.id)
        // console.log(result);
        setTitle(data.data.title);
        setDescription(data.data.description);
        setPhotoLink(data.data.photos);
        setId(data.data.id);
    }

useEffect(()=>{
    getDiscussion()
},[])

// update
const update = async(ev)=>{
    ev.preventDefault()

    // create body to share with backend
    const body = {
        id,
        title,
        description,
        photoLink,
    }
    const result = await axios.post('update-discussion',body)
    alert(result.data.message)
    location('/')
}


  return (
    <div className=' dis mt-10  text-center grid justify-items-center'>
         <form  className='mt-10 max-w-lg text-center ' >
                       <input type="text" value={id} onChange={ev => setId(ev.target.value)} placeholder="id" />
                        
                       <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example:HTML Session" />

                       
                       <input type="text" value={description} onChange={ev => setDescription(ev.target.value)} placeholder="description" />

                       <input type="text" value={photoLink} onChange={ev => setPhotoLink(ev.target.value)} placeholder={'photo link link....jpg'} />

                       
                       
                        <div>
                            <button onClick={(ev)=>update(ev)} className="primary my-4"> UPDATE</button>
                            </div>         
                    </form>
    </div>
  )
}

export default EditDiscussion