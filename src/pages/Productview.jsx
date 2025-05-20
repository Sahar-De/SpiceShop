import React, { useEffect, useState } from 'react'
import { Button, Carousel, Rate, message } from 'antd'
import { PlusCircleFilled, HeartOutlined, HeartFilled, MinusCircleFilled } from "@ant-design/icons"
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from "../slices/CartSlice"
import { fetchProductById, selectProductById, selectProductsStatus } from '../slices/ProductSlice';


const ProductView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, id));
  const { isLoggedIn, user } = useSelector(state => state.auth)
  const status = useSelector(selectProductsStatus);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch, product]);

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(product));
    setIsAddedToCart(true)
    messageApi.open({
      type: "success",
      content: "محصول به سبد خرید اضافه شد"
    })
  }

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(product.idMeal));
  }

  const handleDeletItemFromCart = () => {
    dispatch(deleteItemFromCart(product.idMeal));
    setIsAddedToCart(false)
    messageApi.open({
      type: "error",
      content: "محصول از سبد خرید حذف شد"
    })
  }

  // Format price with commas  
  const formattedPrice = product.price?.toLocaleString('fa-IR') + ' تومان';

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
        <div className="text-xl text-red-500">محصول یافت نشد!</div>
        <Link to="/shop">
          <Button type="primary">بازگشت به فروشگاه</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-farsi bg-gray-50 font-sans pt-24 px-4 md:px-8 lg:px-16 bg-[url(/images/pattern.jpg)] bg-cover">
      {contextHolder}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 ">
        {/* Product Image Section */}
        <div className="w-full gap-2 lg:w-1/2 bg-white rounded-lg shadow-md p-4 flex flex-col gap-y-2 laptop:flex-row justify-start">
          <img
            src={product.strMealThumb}
            alt={product.strMeal}
            className="w-full max-w-md object-contain h-96 mix-blend-multiply rounded-md"
          />
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">توضیحات محصول</h2>
            <p className="text-gray-600 leading-loose mb-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باش</p>
            <p className="text-gray-600 leading-loose mb-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باش</p>
            <p className="text-gray-600 leading-loose mb-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باش</p>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.strMeal}</h1>

          <div className="flex flex-col gap-2">
            <div className=' flex items-center gap-2 mb-4'>
              <span className="text-gray-600">دسته بندی:</span>
              <span className="text-blue-600 font-medium">{product.strCategory}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-600">ملیت:</span>
              <span className="text-blue-600 font-medium">{product.strArea}</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-3 sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-2xl text-green-600 font-semibold">{formattedPrice}</p>
            <div className="flex items-center gap-3">
              <Rate allowHalf defaultValue={4.5} className="text-yellow-500" />
              <span className="text-gray-500">19 نفر نظر داده اند</span>
            </div>
          </div>

          <hr className="border-gray-200 my-4" />



          <div className="flex flex-col sm:flex-row items-center gap-4">
            {isLoggedIn && (<>
              <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
                <MinusCircleFilled onClick={() => handleRemoveItemFromCart()} className="text-gray-600 text-xl cursor-pointer hover:text-gray-800" />
                <span className="text-lg font-medium">1</span>
                <PlusCircleFilled onClick={() => handleAddItemToCart()} className="text-gray-600 text-xl cursor-pointer hover:text-gray-800" />
              </div>

              <Button
                type="primary"
                size="large"
                className="bg-blue-600 hover:bg-blue-700 flex-1"
                onClick={() => handleAddItemToCart()}
              >
                اضافه به سبد خرید
              </Button>
            </>)}

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