import React from 'react'
import ConvoCard from './ConvoCard'
import { useSelector } from 'react-redux'
import store from '../utils/Store'

const Conversation = () => {

  const data = useSelector(store => store.User)
  const countOfCard = data.length

  return (
    <div className=' w-[30vw] h-full border border-r-0 border-t-0 flex relative'>


      <div className="flex gap-10 p-2 mx-5 font-bold fixed">
        <h2> 
          <span>{countOfCard}</span> Open
          <span><i className="fas fa-chevron-down ml-1 text-xs"></i></span>
          </h2>
        <h2>Wating longest
          <span><i className="fas fa-chevron-down ml-1 text-xs"></i></span>
        </h2>
      </div>


    <div className="mt-8 overflow-auto flex flex-col w-full">
      {data && data.map((items , index)=>{
        
        return <ConvoCard currIdx={index} key={index} name = {items.name} message = {items.messages[0].text} time = {items.time} avatarBg = {items.avatarBg} icon={items.name.slice(0,1)}/>
      })}


      
      </div>
            <div className="fixed flex gap-2 text-2xl m-4  bottom-0 bg-gray-50 rounded-xl shadow-md ">
            <i className="fa-solid fa-table-columns fa-rotate-90 hover:bg-gray-300 rounded-xl p-2"></i>
             <i className="p-2 fas fa-bars hover:bg-gray-300 rounded-xl"></i>

            </div>
    </div>
  )
}

export default Conversation