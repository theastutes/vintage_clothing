import React from 'react'
import {auth} from './../../../auth'
async function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const session = await auth();
    
    if(session?.user?.email != "karanmaurya81002@gmail.com")
        return (<div className='h-screen w-screen flex flex-col justify-center items-center'>
            You are not authorized to visit this page.
        </div>);
    else
        return (
    <div className='bg-teal-100 w-screen h-screen'>
        {children}
    </div>
  )
}

export default layout