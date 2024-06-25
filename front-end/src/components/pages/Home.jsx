import React from 'react'
import Slides from '../home-compon/Slides'
import HomeCategories from '../home-compon/HomeCategories';
import CurrentAnnouc from '../home-compon/CurrentAnnouc';
import Footer from '../Footer'
const Home = () => {
  return (
    <>
    <div className='p-4'>
      <div className="slide-container">
       <Slides/>
       </div>
       <div className="current-annouc p-4 mt-4">
        <h2 className='ml-14 mt-4 font-medium text-2xl'>Currently on Chila Bila 🔥🔥</h2>
        <div className="bar h-1 bg-[#ff385c] w-80  ml-14 mt-2"></div>
         <CurrentAnnouc/>
       </div>
       <div className="categories flex flex-col">
        <h2 className='ml-14 mt-4 font-medium text-2xl'>Explore Categories 💥💥</h2>
        <div className="bar h-1 bg-[#ff385c] w-72  ml-14 mt-2"></div>
        <HomeCategories/>
       </div>
    </div>
    </>
  )
}

export default Home