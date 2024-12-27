import React from 'react'
import Heading from './Heading'
import SearchBox from './SearchBox'
import Results from './Results'

const MainSection = () => {
  return (
    <div className='bg-[#1e1f20] min-h-screen w-full relative'>
         <Heading />
         <Results />
         <SearchBox />
      
    </div>
  )
}

export default MainSection