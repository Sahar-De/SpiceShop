import React, { useEffect } from 'react'
import { Button, Carousel, Rate } from 'antd'
import { PlusCircleFilled, HeartOutlined, HeartFilled, MinusCircleFilled } from "@ant-design/icons"
import { Link, useParams } from 'react-router-dom'
import { getProducts } from '../data/products'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById, selectProductById, selectProductsStatus } from '../slices/ProductSlice';

const ProductView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, id));
  const status = useSelector(selectProductsStatus);

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch, product]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="text-xl text-red-500">Product not found!</div>
        <Link to="/shop">
          <Button type="primary">Return to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-farsi bg-gray-50 font-sans pt-24 px-4 md:px-8 lg:px-16 bg-[url(/images/pattern.jpg)] bg-cover">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 ">
        {/* Product Image Section */}
        <div className="w-full gap-2 lg:w-1/2 bg-white rounded-lg shadow-md p-4 flex justify-start">
          <img
            src={product.strMealThumb}
            alt={product.strMeal}
            className="w-full max-w-md object-contain h-96 mix-blend-multiply"
          />
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">توضیحات محصول</h2>
            <p className="text-gray-600 leading-relaxed">{product.shortDesc}</p>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.strMeal}</h1>

          <div className="flex flex-col gap-2">
            <div className=' flex items-center gap-2 mb-4'>
              <span className="text-gray-600">Category:</span>
              <span className="text-blue-600 font-medium">{product.strCategory}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-600">Area:</span>
              <span className="text-blue-600 font-medium">{product.strArea}</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-3 sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-2xl text-green-600 font-semibold">{product.price} تومان</p>
            <div className="flex items-center gap-3">
              <Rate allowHalf defaultValue={4.5} className="text-yellow-500" />
              <span className="text-gray-500">19 نفر نظر داده اند</span>
            </div>
          </div>

          <hr className="border-gray-200 my-4" />



          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
              <MinusCircleFilled className="text-gray-600 text-xl cursor-pointer hover:text-gray-800" />
              <span className="text-lg font-medium">1</span>
              <PlusCircleFilled className="text-gray-600 text-xl cursor-pointer hover:text-gray-800" />
            </div>

            <Button
              type="primary"
              size="large"
              className="bg-blue-600 hover:bg-blue-700 flex-1"
            >
              اضافه به سبد خرید
            </Button>

            <Link to="/shop" className="w-full sm:w-auto">
              <Button
                size="large"
                className="w-full border-gray-300 hover:border-blue-500 text-gray-700"
              >
                بازگشت به فروشگاه
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ProductView;