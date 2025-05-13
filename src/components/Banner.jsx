import React from 'react'
import plant from "./../assets/banner-big-plant.png"
import plant2 from "./../assets/banner-small-plant.png"
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-stone-50 rounded-3xl tablet:rounded-none mt-4 flex items-center justify-center tablet:flex-row gap-1 bg-[url(/images/ingrediants2.jpg)] bg-cover bg-top bg-no-repeat p-1'>
      {/* <div className='image relative  laptop:w-2/5 -right-10 tablet:right-0 '>
            <img src={plant} alt="plant" className='size-52 laptop:size-auto'/>
            <img src={plant2} className='size-20 tablet:size-auto absolute bottom-0  desktop:bottom-8 left-14' />
        </div> */}
      <div className='title flex flex-col items-center justify-center gap-1 tablet:gap-5 w-1/2 laptop:w-2/5 bg-white/80 rounded-2xl my-10 shadow-md shadow-gray-400 p-5  border border-green-400'>
        <h1 className='text-mint-500 text-center text-lg tablet:text-3xl font-bold font-farsi'>SPICE </h1>
        <h2 className='text-dark text-center font-extrabold text-xl laptop:text-6xl font-farsi'>Bold Flavors, Bigger Adventures</h2>
        <p className='text-darkgray text-wrap block shrink-1 font-farsi text-xs  tablet:text-base tablet:w-96'></p>

        <NavLink to={"/shop"}>
          <Button type="primary" size="large">Start Ordering</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Banner