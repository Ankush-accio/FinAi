import React from 'react'
import LeftComp from './components/LeftComp'
import RightComp from './components/RightComp'
const App = () => {
  return (
    <div className='flex h-[100vh]'>
      <LeftComp/>
      <RightComp/>
    </div>
  )
}

export default App