import React from 'react'

const LandingPage = ({theme}) => {
  return (
    <>
        <div className={`flex flex-col justify-center items-center ${theme} text-5xl font-bold pt-20`}>
            <img className='h-80 w-auto rounded-3xl' src="https://i.postimg.cc/vcCcsnyN/YoPunit.jpg" alt="Yo punit thara bhai putin" />
            <p>Yo Punit, thara bhai Punit,</p>
            <p>itni coding kr rya hai, thane sochi na hogi!!!</p>
        </div>
    </>
  )
}

export default LandingPage