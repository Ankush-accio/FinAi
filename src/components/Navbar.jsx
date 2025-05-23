import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const userData = useSelector(store => store.User)
  const currUser = useSelector(store => store.CurrentUser)
  let obj = userData[currUser]

  return (
    <div className='h-[8vh] flex  gap-2.5  items-center border'>
            <h2 className='text-xl font-bold w-[30%] pl-10'>Your inbox</h2>

        <div className='flex justify-between  w-[90%] px-3'>
            <h2 className='text-xl font-bold pl-12'>{obj.name}</h2>


            <div className="flex gap-2">
                 <i className="fas fa-ellipsis border p-1.5 rounded-xl bg-gray-200"></i>
                 <i className="fas fa-moon border p-1.5 rounded-xl bg-gray-200"></i>
                 <i className="fas fa-closed-captioning border p-1.5 rounded-xl text-white bg-black"></i>
            </div>


       </div>
 </div>
  )
}

export default Navbar