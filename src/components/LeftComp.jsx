import React from 'react'
import Navbar from './Navbar'
import Conversation from './Conversation'
import Chat from './Chat'


const LeftComp = () => {
  
  return (
    <div className='w-[70vw] h-[100vh]'>
      <Navbar/>
      <div className='flex h-[92vh]'>
      <Conversation/>
      <Chat className='sm:w-[70vw]'/>
      </div>
    </div>
  )
}

export default LeftComp