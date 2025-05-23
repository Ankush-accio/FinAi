import React from 'react'
import { useDispatch } from 'react-redux'
import { changeUser } from '../utils/CurrentUser'


const ConvoCard = ({name , message , avatarBg , time , icon, currIdx}) => {

  const dispatch = useDispatch()


  return (
        <div onClick={() => {
          dispatch(changeUser(currIdx))
        }} className="flex justify-between items-center hover:bg-blue-100 p-4 m-1 rounded-md shadow-sm  w-100%">

      <div className=" flex w-full ">
        <div className={`${avatarBg} text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mr-3`}>
          {icon}
        </div>

        <div className=' flex flex-col mx-auto'>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-gray-600 text-sm truncate w-40">{message}</p>
        </div>
      </div>

      <p className="text-gray-500 text-xs">{time}</p>
    </div>
  )
}

export default ConvoCard