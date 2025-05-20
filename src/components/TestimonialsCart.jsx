import React from 'react'
import { StarOutlined } from '@ant-design/icons'
import { Rate } from 'antd'

const TestimonialsCart = ({ image, name, testimonial, rate }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
                />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{name}</h3>
            <div className="flex justify-center mb-3">
                {/*  {[...Array(5)].map((_, i) => (
                    <StarOutlined
                        key={i}
                        className={`text-${i < rate ? 'yellow-400' : 'gray-300'} text-xl mx-0.5`}

                    />
                ))} */}
                <Rate allowHalf value={rate} />
            </div>
            <p className="text-gray-600 text-center italic">
                "{testimonial}"
            </p>
        </div>
    )
}

export default TestimonialsCart;