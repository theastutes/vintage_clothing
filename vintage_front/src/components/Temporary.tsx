"use client"
import React, { useState } from 'react'

function Temporary() {
    const[selectedCat,setCat] = useState("");

    const data=['ab','adb','are', 'aiol', 'wlij','wuio','wzdj', 'wdfjdk'];

    const checkCat = (data:string[]) => {
        return data.filter((word)=>word.includes(selectedCat));
    }

    const filtered = checkCat(data);

  return (<>
    <div>Temporary</div>

    <button type='button' onClick={()=>setCat("a")}>words with a</button><br/>
    <button type = 'button' onClick={()=>setCat("w")}>words with w</button><br/>
    <button type = 'button' onClick={()=>setCat("")}>clear category</button><br/>

    {filtered.map((mydata,index)=>
        <div className='flex flex-row flex-wrap gap-14'>{mydata}</div>
    )}
    </>
  )
}

export default Temporary

// import React from 'react';
// import { GetServerSideProps } from 'next';



// const Temporary= () => {
//   const data = ['ab', 'adb', 'are', 'aiol', 'wlij', 'wuio', 'wzdj', 'wdfjdk'];
    
//   let selectedCat = "";

//   const checkCat = (data: string[]) => {
//     return data.filter((word) => word.includes(selectedCat));
//   };

//   const handleA = async ()=>{
//     "use server"
//     selectedCat = 'a';
//   }

//   const filtered = checkCat(data);

//   return (
//     <>
//       <div>Temporary</div>

//       <form action={handleA}> <button type="submit" > words with a</button></form><br />
//       <form action={async () => {
//         "use server"
//         selectedCat = "b"
//       }}> <button type="submit" > words with w</button> </form><br />
//       <form action={async () => {
//         "use server"
//         selectedCat= ""
//       }}>clear category</form><br />

//       {filtered.map((mydata, index) => (
//         <div key={index} className="flex flex-row flex-wrap gap-14">
//           {mydata}
//         </div>
//       ))}
//     </>
//   );
// };



// export default Temporary;
