import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


function Github() {
//    let {userid}=useParams()
//    userid=userid*9
    //  const [data,setdata]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/diwakarcs50')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])

    const data=useLoaderData()

    return (
        // <h1 className='bg-gray-200 text-green-300 p-5 text-xl'>user:{userid}</h1>
        // className='m-4 bg-black text-orange-400 p-5 '
       
        <div 
        className=' text-center m-4 bg-black text-orange-400 p-5 '
         >
             text:{data.id}
             <img src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github

export const userinfo=async ()=>{
  const response=await fetch('https://api.github.com/users/diwakarcs50')
    return response.json()
}
    

