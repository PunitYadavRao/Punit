import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const Navbar = ({navContent, swtch, theme}) => {

    return (
      <>
        <div className='sm:flex sm:items-center sm:justify-between w-full h-16 py-3 px-10 bg-emerald-600/80 rounded-[50px]'>
          <h1 className='font-MiyaKhalifa text-3xl text-white text-center'>Punit Yadav Rao</h1>
          <button className='flex justify-center p-5 rounded-[50px] bg-white/60 sm:text-2xl place-content-center hover:cursor-pointer' onClick={swtch}> {theme? <FaMoon />: <FaSun /> } </button>
          <div className='sm:flex sm:gap-8 text-white hover:cursor-pointer'>
            {navContent.map((navTags, index)=>(
              <p key={index}>{navTags}</p>
            ))}
          </div>
        </div>
      </>
    )
  }

export default Navbar