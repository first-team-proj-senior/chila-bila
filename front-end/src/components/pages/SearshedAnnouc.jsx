import React from 'react'
import { NavLink } from 'react-router-dom'

const SearshedAnnouc = (props) => {
    const filtredAnnouc= props.annoucement.filter((elem)=>{
        return elem.title.toLowerCase().includes(props.searchVal.toLowerCase())
    })
  return (
    <div className='flex items-center justify-center flex-col '>
        <div className="title">
        <h3 className='text-3xl mt-10 p-2'>Did You look for 👀</h3>

        </div>
        <div className="items flex flex-wrap">

    {filtredAnnouc.map((elem)=>{
        return(
            <NavLink to='/annoucement/detail '>

    <div onClick={()=>props.oneAnnouc(elem)} className="annoucment-card cursor-pointer max-w-44 m-4 bg-white shadow-md rounded-xl flex flex-col">
         <img className='max-w-48 rounded-xl' src={elem.imageUrl} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium'>{elem.title}</h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >{elem.price} TND</h3>
         </div>
            </NavLink>
        )
    })}
        </div>
    </div>
  )
}

export default SearshedAnnouc