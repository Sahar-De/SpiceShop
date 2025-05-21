import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { posts } from './../data/blog'
import { useDispatch, useSelector } from 'react-redux'
import PostCart from './PostCart'
import { fetchProducts } from '../slices/ProductSlice'

const SwipSlide = ({ title, desc, discount }) => {


  const dispatch = useDispatch();
  const all = useSelector((state) => state.products.products)



  useEffect(() => {
    dispatch(fetchProducts());
  }, []);



  return (
    <div className=' SwipSlide flex w-full  flex-col gap-5 items-center justify-center font-farsi mt-24'>
      <h1 className='text-dark text-2xl font-bold'>{title}</h1>
      <p className='text-base text-dark text-center'>{desc}</p>
      <div className='w-full'>
        <Swiper
          className='mySwiper p-2! '
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ type: "fraction" }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            760: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1440: { slidesPerView: 3, spaceBetween: 20 }
          }}
          autoplay={{ delay: 2000 }}
        >
          {all.slice(0, 10).map((item, index) => (
            <SwiperSlide key={index}><PostCart post={item} isNew={true} discount={discount} /></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SwipSlide