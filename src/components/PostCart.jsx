import React from 'react'
import { Link } from 'react-router-dom'
import { FireOutlined, FireFilled } from '@ant-design/icons'

const PostCart = ({ post, isNew, discount }) => {
  return (
    <div className='post bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full relative'>
      {/* New item badge */}
      {isNew && (
        <div className='absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 z-10'>
          <FireFilled className='text-white' />
          <span>جدید</span>
        </div>
      )}
      {discount && discount.length > 0 && (
        <div className='absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 z-10'>
          <FireFilled className='text-red-500' />
          <span>{discount}</span>
        </div>
      )}

      <div className='w-full h-48 overflow-hidden relative'>
        <img
          src={post.strMealThumb}
          alt={post.strMeal}
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='flex flex-col justify-between p-4 gap-3 flex-grow'>
        <span className='text-xs text-green-600 font-medium'>{post.strCategory}</span>
        <h6 className='text-lg font-bold text-gray-800 line-clamp-2'>{post.strMeal}</h6>
        <p className='text-lg font-semibold text-gray-900'>
          ${post.price}
        </p>

        <Link
          to={`/shop/${post.idMeal}`}
          className='mt-2 inline-block text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300 text-sm font-medium'
        >
          جزئیات بیشتر
        </Link>
      </div>
    </div>
  )
}

export default PostCart