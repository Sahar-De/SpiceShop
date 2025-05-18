import React, { useState } from 'react';
import { HeartOutlined, HeartFilled, SearchOutlined, MinusCircleOutlined, PlusCircleOutlined, DeleteFilled } from "@ant-design/icons";
import { Button, Tooltip, message } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from "../slices/CartSlice"

const MealCart = ({ product }) => {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.auth)
    const [isLiked, setIsLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const shoppingCart = useSelector(
        (state) => (
            state.cart.items
        )
    )

    const SelectionQuantity = () => {
        return shoppingCart.includes(product) ? product.quantity : 0;
    }

    const handleAddItemToCart = () => {
        dispatch(addItemToCart(product));
        message.success('Adding was successful');
    }

    const handleRemoveItemFromCart = () => {
        dispatch(removeItemFromCart(product.idMeal));
    }

    const handleDeletItemFromCart = () => {
        dispatch(deleteItemFromCart(product.idMeal));
    }

    // Format price with commas  
    const formattedPrice = product.price?.toLocaleString('fa-IR') + ' تومان';

    return (
        <div
            className="relative font-farsi w-full max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image */}
            <div className="relative  w-full bg-gray-100 flex items-center justify-center p-4">
                <img
                    src={product.strMealThumb}
                    alt={product.strMeal}
                    className="h-full w-full rounded-t-md aspect-square object-covar mix-blend-multiply transition-transform duration-300 hover:scale-105"
                />

                {/* Quick Actions (appear on hover) */}
                {isHovered && (
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center gap-4 ">
                        <Tooltip title="جزییات محصول">
                            <Link
                                to={`/shop/${product.idMeal}`}
                                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                            >
                                <SearchOutlined className="text-gray-700" />
                            </Link>
                        </Tooltip>

                        <Tooltip title={isLiked ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}>
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                            >
                                {isLiked ? (
                                    <HeartFilled className="text-red-500" />
                                ) : (
                                    <HeartOutlined className="text-gray-700" />
                                )}
                            </button>
                        </Tooltip>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 truncate max-w-[180px]">
                        {product.strMeal}
                    </h3>
                    <span className="text-xs bg-mint-100 text-mint-800 px-2 py-1 rounded-full">
                        {product.strCategory}
                    </span>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-mint-600">
                        {formattedPrice}
                    </span>

                    <Link
                        to={`/shop/${product.idMeal}`}
                        className="text-sm text-mint-600 hover:text-mint-800 hover:underline flex items-center"
                    >
                        مشاهده جزئیات
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Add to Cart Button */}
                {isLoggedIn && <div className='flex gap-4 items-center justify-between p-1.5 '>
                    <MinusCircleOutlined onClick={handleRemoveItemFromCart} />
                    <Button onClick={handleDeletItemFromCart}>حذف</Button>
                    <PlusCircleOutlined onClick={handleAddItemToCart} />
                </div>}
            </div>
        </div>
    );
};

export default MealCart;