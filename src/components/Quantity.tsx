'use client'

import { useState } from "react"
import React from 'react'

const Quantity = () => {
    
    const [num, setNum] = useState(1);

  return (
    <div className='ml-3 center gap-x-3'> 
    <button className="w-6 h-6 duration-300 border-2 rounded-full hover:shadow-2xl flex justify-center items-center" 
                onClick={()=> 
                setNum(num<=0 ? 1 :num-1)}> 
              <span className="text-lg font-semibold text-gray-800 "> 
                - </span>  
    </button>
    <div className=" duration-300   hover:shadow-2xl flex justify-center items-center" > 
              <span className="text-lg font-semibold text-gray-800 "> 
                {num} </span>  
    </div>
    <button className="w-6 h-6 duration-300 border-2 rounded-full hover:shadow-2xl flex justify-center items-center" 
                onClick={()=> setNum(num+1)}> 
              <span className="text-lg font-semibold text-gray-800 "> 
                + </span>  
    </button>

    </div>    
  )
}

export default Quantity