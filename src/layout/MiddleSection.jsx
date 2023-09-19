import React from 'react'
import bgMocca from "../assets/mocca.jpg" 
import SearchBar from "../components/SearchBar"

const MiddleSection = () => {
  return (
    <div className='bg-blue-900 w-full h-[70vh] flex flex-col items-center'>
      {/* <p>container</p> */}
      <img src={bgMocca} alt="" className='sm:w-[344px] w-[288px]'/>
      <section className='bg-transparent mt-[-180px] text-white'>
        <SearchBar />
      </section>

    </div>
  )
}

export default MiddleSection