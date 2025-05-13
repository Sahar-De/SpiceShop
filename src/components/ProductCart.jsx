import React, { useState } from 'react'
import { PlusCircleFilled, HeartOutlined, HeartFilled, SearchOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button } from 'antd';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({ like, product }) => {


  const [isLike, setIsLike] = React.useState(false);
  const [isSelect, setIsSelect] = React.useState(false);

  return (
    <div  className='cart shrink-0 font-farsi flex- flex-col items-center gap-4 before:content[""] before:w-0 before:h-0.5 before:bg-mint-500 before:block hover:before:w-full before:transition-[width] before:duration-150'>
        <div className='flex flex-col items-center rounded-xl laptop:rounded-none bg-[#fbfbfb] pb-3'>
            <img src={product.strMealThumb} className='size-48 tablet:size-56 mix-blend-darken'/>
           <div className=''>
           

              {/* {cart.getProductQuantity(product.id)===0?
                    <div className='flex gap-4 '>
                    <button onClick={()=>{setIsLike(!isLike)}}>
                      {isLike?<HeartFilled style={{color:"red"}}/>:<HeartOutlined color='red'/>}
                    </button>
                      <Button onClick={()=>{cart.addProduct(product.id)}} style={{color:"#117554"}}>اضافه به سبد</Button>
                      <SearchOutlined/>
                  </div>:<div className='flex gap-4 '>
                  <MinusCircleOutlined onClick={()=>{cart.removeProductItem(product.id)}}/>
                  <Button onClick={()=>{cart.removeProduct(product.id)}}>حذف</Button>
                  <PlusCircleOutlined onClick={()=>{cart.addProduct(product.id)}}/>
                </div>
              } */}

           </div>
           
            
            
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div className='flex flex-col items-start'>
              <label className='text-dark font-semibold text-base'>{product.strMeal}</label>
          <label className='text-mint-500 text-base'>{product.price}</label>
           <label className='text-mint-500 text-base'>{product.strCategory}</label>
          </div>
          <Link to={`/shop/${product.idMeal}`}>جزئیات بیشتر</Link>
        </div>
        
    </div>

  )
}

export default ProductCart