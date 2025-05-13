import { Button } from 'antd'
import React from 'react'

const Carts = ({ image, text, title, link }) => {
  return (
    <div className='bg-[url("/images/Frame.png")] pl-2 group h-[200px] w-full laptop:w-[calc(50%-10px)] min-w-xs  rounded-md bg-cover gap-1 bg-right-bottom bg-no-repeat flex flex-col mobile:flex-row mb-10 items-center justify-around'>
      <img src={image} className='mix-blend-darken -translate-y-8 group-hover:-translate-y-10 transition-all duration-200 size-[200px] laptop:size-[290px]' />
      <div className='flex flex-col gap-2 items-start justify-between'>
        <h2 className='text-dark text-lg text-right font-bold'>{title}</h2>
        <p className='text-darkgray text-sm block break-words'>{text}</p>
        <Button type='primary'>{link}</Button>
      </div>

    </div>
  )
}

export default Carts