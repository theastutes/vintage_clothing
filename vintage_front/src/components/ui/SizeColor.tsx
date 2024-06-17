"use client"
import React, { useEffect, useState } from 'react'
import { IoIosExit, IoIosAdd } from 'react-icons/io'
import { HexColorPicker } from 'react-colorful'
import { RxCross2 } from "react-icons/rx";
import { BiCheck } from "react-icons/bi";
import clsx from 'clsx'
import { number } from 'zod';
function SizeColor() {

    interface Color {
        color: string;
        colorName: string;
        quantity: number;
    }

    interface Size {
        size: string;
        colors: Color[];
    }

    const [toggle, setToggle] = useState(false);

    const [ring, setRing] = useState(false);

    const [size, setSize] = useState<Size>({
        size: '',
        colors: [
            {
                color: '#ffffff',
                colorName: 'white',
                quantity: 0,
            }
        ]
    });

    const [col, setCol] = useState<Color>({
        color: "#ffffff",
        colorName: "white",
        quantity: 0,
    });

    // const handleColor = () => {
    //     addColor(col);
    //     console.log(col);
    // }

    useEffect(() => {
        // This code runs after `items` has been updated
        ring
        console.log('Items have been updated', size.colors);
      }, [size.colors]); 

      const handleDelCol = (index: number) => {
        size.colors.splice(index,1);
        setRing((prev)=>!prev)
    }

    const handleColorChange = (colorValue:string) => {
        setCol({ ...col, color: colorValue });
    };

    const addColor = () => {
        setSize({ ...size, colors: [...size.colors, col] });
       
    setCol({ color: '', colorName: '', quantity: 0 });
    console.log(size);
    };

    return (
        <div className='pt-60 bg-pink-100 p-4 px-8 h-10 w-full flex flex-row justify-around items-center '>
            <div>S</div>

            {
                size.colors.map((colorItem, index) => (
                
                    <div key={index} className={clsx('w-16 h-8 border-2 border-gray-300 rounded-xl flex flex-row justify-around items-center',
                    {"hidden":colorItem.quantity === 0,
                        "visible":colorItem.quantity !== 0
                    })}>

                        <div className={` w-6 h-6 border-2 border-yellow-400 flex  justify-center bg-[#33ffee] items-center rounded-full `} style={{ backgroundColor: colorItem.color }} >{colorItem.quantity}</div>

                        <button type='button' name='button' title='delete' className='cursor-pointer' onClick={() => handleDelCol(index)}><RxCross2/></button>
                        
                    </div>
                ))
            }

            <div className={'flex flex-row '}>
                <div className={clsx(' relative flex flex-col ',
                    { 'hidden': toggle === false, 'visible': toggle === true }
                )}>
                    <div className={clsx('w-full h-6 z-20 rounded-md  flex flex-row justify-between items-center px-2',)} onClick={() => setToggle(false)} >

                        <RxCross2 className='hover:cursor-pointer' />
                        <div className='hover:cursor-pointer' onClick={addColor} >
                        <BiCheck /></div>
                    </div>

                    <HexColorPicker className='w-full' color={col.color} onChange={handleColorChange} />

                    <input type='text' value={col.colorName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCol({ ...col, colorName: e.target.value })} placeholder='Colorname' ></input>

                    <input type='number'  value={col.quantity}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCol({ ...col, quantity: parseInt(e.target.value) })} placeholder='Quantity' ></input>
                </div>

                <div className={clsx('absolute w-4 h-4 hover:cursor-pointer', {
                    'hidden': toggle === true, 'visible': toggle === false
                })} onClick={() => setToggle(true)} ><IoIosAdd /></div>


            </div>
        </div>
    )
}

export default SizeColor