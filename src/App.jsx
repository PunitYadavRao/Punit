import React, { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

const App = () => {
  const navContent = ['Home', 'Projects', 'About', 'Contact']
  const [mode, setmode] = useState(true)
  const switchMode = ()=>{
      setmode(!mode)
    }
  let theme = mode? 'bg-white':'bg-black'
  let texttheme = mode? 'text-black':'text-white'
  return (
    <>
    <div className={`h-screen w-screen py-3 px-5 ${theme} duration-700`}>
      < Navbar navContent={navContent} swtch={switchMode} theme={mode} />
      < LandingPage theme={texttheme} />
    </div>
    </>
  )
}

export default App
