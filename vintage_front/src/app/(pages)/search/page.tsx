import Search from '@/components/Search'
import React from 'react'

function page() {
  return (
    <div className='relative w-screen h-screen flex  bg-blue-500 justify-center items-center'>
        <Search width={80} height={10}/>
    </div>
  )
}

export default page