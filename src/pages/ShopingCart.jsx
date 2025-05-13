import React from 'react'
import { DeleteOutlined, MinusCircleFilled, PlusCircleFilled, ShoppingOutlined } from '@ant-design/icons'
import { Button, Empty, InputNumber, message, Popconfirm, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from '../slices/CartSlice'
import { useNavigate, Link } from 'react-router-dom'
import { getProducts } from './../data/products'

const ShopingCart = () => {
  const { Title } = Typography
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items);

  
  // Calculate totals
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price*item.quantity, 0)
  const shippingCost = totalPrice > 0 ? 20000 : 0 // example fixed shipping cost
  const discount = 0 // no discount as per user request
  const finalTotal = totalPrice + shippingCost - discount

  const handleCheckOut = () => {
    if (cartItems.length === 0) {
      message.warning("سبد خرید شما خالی است!")
      
    }
    else {
      navigate('/checkout')
    }
    
  }

  const handleQuantity = (id, type, item) => {

    switch (type) {
      case 'add':
        {
          dispatch(addItemToCart(item))
        }
      case 'decrease':
        {
          dispatch(deleteItemFromCart(id))
        }
      case 'delet': {
        dispatch(removeItemFromCart(id))
        message.success('محصول از کارت حذف شد')
      }
    }

  }

  const columns = [
    {
      title: 'نام محصول',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'قیمت',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `${price.toLocaleString()} تومان`

    },
    {
      title: 'تعداد',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => (
        <InputNumber
          min={1}
          value={record.quantity}
          onChange={(value) => handleQuantity(record.id, value)}
        />
      )

    },
    {
      title: 'جمع',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (_, record) =>`${(record.price * record.quantity).toLocaleString()} تومان`

    },
    {
      title: 'عملیات',
      key: 'operation',
      render: (_, record) => (
        <Popconfirm
          title="ازاین عملیات مطمئن هستید؟"
          onConfirm={() => handleRemove(record.id)}
          okText="بله"
          cancelText="خیر"
        >
          <Button
            type='text'
            danger
            icon={<DeleteOutlined/>}
          >
            حذف
          </Button>
        </Popconfirm>
      )
    }

  ];
  if (cartItems.length === 0) {
    return (
      <Empty description={<span>سبد خرید شما خالی است!!!!</span>}>
        <Link to="/shop">
          <Button type='primary' icon={<ShoppingOutlined/>}>بازگشت به فروشگاه</Button>
        </Link>
        </Empty>
      )
  
}
  return (
    <div className='flex flex-col laptop:flex-row py-10 gap-20 font-farsi '>
      <table className='w-full laptop:w-1/2 table-auto tab'>
        <thead>
          <tr className='border-b-1 border-b-gray '>
            <th className='pb-5'>محصول</th>
            <th className='pb-5'>تعداد</th>
            <th className='pb-5'>قیمت واحد</th>
            <th className='pb-5'>قیمت کل</th>
            <th className='pb-5'>حذف</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={5}>
                <div className='flex justify-center'>
                  <Title level={4}>
                    <Link to='/shop'>
                      سبد خرید شما خالی است <ShoppingOutlined />
                    </Link>
                  </Title>
                </div>
              </td>
            </tr>
          ) : (
            cartItems.map((item) => {
              const product = getProducts(item.id)
              return (
                <tr key={item.id} className='bg-lightgray my-2'>
                  <td>
                    <div className='flex items-center'>
                      <img
                        className='size-16 mix-blend-darken'
                        src={`/images/productimages/${product.image}`}
                        alt={product.name}
                      />
                      {product.name}
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='flex justify-between items-center'>
                      <PlusCircleFilled
                        onClick={() => (addItemToCart(product))}
                        style={{ cursor: 'pointer' }}
                      />
                      <span>{item.quantity}</span>
                      <MinusCircleFilled
                        onClick={() => handleQuantity(item.id, 'decrease')}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </td>
                  <td className='text-center'>{product.price.toLocaleString()}</td>
                  <td className='text-center'>{item.totalPrice.toLocaleString()}</td>
                  <td className='text-center'>
                    <DeleteOutlined
                      onClick={() => handleQuantity(item.id, 'delet')}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
      <div className='flex flex-col gap-5 w-full laptop:w-1/3 self-start'>
        <h5 className='font-semibold'>اطلاعات خرید</h5>
        <hr className='text-gray' />
        <table className='w-full'>
          <tbody>
            <tr>
              <td>قیمت کل:</td>
              <td>{totalPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td>تخفیف:</td>
              <td>{discount.toLocaleString()}</td>
            </tr>
            <tr>
              <td>هزینه ارسال:</td>
              <td>{shippingCost.toLocaleString()}</td>
            </tr>
            <tr>
              <td>جمع کل:</td>
              <td>{finalTotal.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
        <Button
          type='primary'
          className='font-farsi!'
          onClick={handleCheckOut}
          disabled={cartItems.length === 0}
        >
          تکمیل خرید
        </Button>
        <Button type='default' className='font-farsi!' onClick={() => navigate('/shop')}>
          ادامه خرید
        </Button>
      </div>
    </div>
  )
}

export default ShopingCart
