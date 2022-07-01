import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const url = "https://api.adviceslip.com/advice";

  const [api, setApi] = useState({})
  const [change, setChange] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((api) => {
        setApi(api.slip)
      })
  }, [change]);


  return (
    <div className="h-screen flex justify-center items-center bg-darkBlue">
     
      
            

              <div className='bg-darkGrayishBlue flex flex-col font-manrope items-center h-72 w-[480px] shadow-lg p-10 rounded-xl relative'>

              <p className='text-neonGreen text-sm font-medium tracking-[4px]'>ADVICE #{api.id}</p>
                
                <div className='text-center h-full flex justify-center items-center'>
                <p className='py-4 text-lightCyan font-bold text-2xl'>
                  “{api.advice}”</p>
                </div>

                <div className='flex justify-center pb-6'>
                  <img src='/assets/pattern-divider-desktop.svg' />
                </div>
              
                <button 
                onClick={() => setChange(!change)}
                className='bg-neonGreen -bottom-[26px] flex justify-center btn p-4 rounded-full absolute'>
                <img  src='/assets/icon-dice.svg'/>
                </button>

              </div>
              
              
           
              
      
      
    </div>
  )
}

export default App

