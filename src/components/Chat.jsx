import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SendMsg } from '../utils/UsersDataSlice'


const Chat = () => {

  const composerData = useSelector(store => store.Composer)
  const[textMsg, setTextMsg] = useState(composerData)
  const dispatch = useDispatch()
  const userSliceData = useSelector(store => store.User)
  const currUser = useSelector(store => store.CurrentUser)
  const currUserData = userSliceData[currUser]
  

  useEffect(() => {
    setTextMsg(composerData);
  }, [composerData]);


  return (
    <div className='h-full w-[70vw] border border-t-0 border-gray-300 relative'>



{/* body */}
<div className="space-y-4 p-4  h-full overflow-auto pb-60 ">
  {currUserData &&
    currUserData.messages.map((item, index) => {
      const isYou = item.sender.toLowerCase() === "you";
      return (
        <div
          key={index}
          className={`flex ${isYou ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs p-3 rounded-lg shadow ${
              isYou
                ? "bg-blue-500 text-white rounded-br-none"
                : "bg-gray-200 text-gray-900 rounded-bl-none"
            }`}
          >
            <p className="text-sm">{item.text}</p>
            <span className="block text-xs mt-1 opacity-70">
              {item.timestamp}
            </span>
          </div>
        </div>
      );
    })}
</div>


{/* chat textarea */}
  <div className="w-full absolute bottom-0 ">
    <div className="border border-gray-300 rounded-2xl p-4 shadow bg-white m-3">
      {/* icon */}
       <div className="flex items-center mb-2 text-gray-700">
          <i className="fas fa-comment mr-2"></i>
          <span className="text-sm font-medium">Chat</span>
          <i className="fas fa-chevron-down ml-1 text-xs"></i>
       </div>

          {/* input area */}
        <div className="text-gray-500 text-sm mb-4">
          <textarea  className='h-[50%] min-h-5 w-full outline-none border-none' placeholder='Use ⌘K for shortcuts ' value={textMsg} onChange={(e)=>{
              if(e.target.value.trim() == "")return
              setTextMsg(e.target.value)
          }} ></textarea>
        </div>

          {/* footer icons */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 text-gray-600 text-lg">
            <i className="fas fa-bolt cursor-pointer"> |</i>
            <i className="fas fa-bookmark cursor-pointer"></i>
            <i className="far fa-smile cursor-pointer"></i>
         </div>

            {/* send btn fn */}
          <button onClick={() => {
            if(!textMsg.length)return
            dispatch(SendMsg({currUser, textMsg}))
            setTextMsg("")
          }} className="flex items-center gap-1 text-gray-500 font-medium hover:text-black">
            Send 
            <span>|</span>
            <i className="fas fa-chevron-down text-sm"></i>
          </button>


        </div>
    </div>
  </div>

    </div>
  )
}

export default Chat