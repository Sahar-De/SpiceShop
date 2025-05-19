import React from 'react'
import { DeleteOutlined, MinusCircleFilled, PlusCircleFilled, ShoppingOutlined } from '@ant-design/icons'
import { Button, Empty, InputNumber, message, Popconfirm, Typography, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from '../slices/CartSlice'
import { useNavigate, Link } from 'react-router-dom'

const ShopingCart = () => {
  const { Title } = Typography
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items);


  // Calculate totals
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
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
          break;
        }
      case 'decrease':
        {
          dispatch(removeItemFromCart(id))
          break;
        }
      case 'delet': {
        dispatch(deleteItemFromCart(id))
        message.success('محصول از کارت حذف شد')
        break;
      }
    }

  }

  const columns = [
    {
      title: 'نام محصول',
      dataIndex: 'strMeal',
      key: 'strMeal'
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
          <MinusCircleFilled
            style={{ cursor: 'pointer', color: '#ff4d4f', fontSize: '18px', marginRight: 8 }}
            onClick={() => handleQuantity(record.idMeal, 'decrease', record)}
          />
          <span style={{ margin: '0 8px' }}>{record.quantity}</span>
          <PlusCircleFilled
            style={{ cursor: 'pointer', color: '#52c41a', fontSize: '18px', marginLeft: 8 }}
            onClick={() => handleQuantity(record.idMeal, 'add', record)}
          />
        </div>
      )
    },
    {
      title: 'جمع',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (_, record) => `${(record.price * record.quantity).toLocaleString()} تومان`

    },
    {
      title: 'عملیات',
      key: 'operation',
      render: (_, record) => (
        <Popconfirm
          title="ازاین عملیات مطمئن هستید؟"
          onConfirm={() => handleQuantity(record.idMeal, "delet", record)}
          okText="بله"
          cancelText="خیر"
        >
          <Button
            type='text'
            danger
            icon={<DeleteOutlined />}
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
          <Button type='primary' icon={<ShoppingOutlined />}>بازگشت به فروشگاه</Button>
        </Link>
      </Empty>
    )

  }
  else {

    return (
      <>
        <Title className='font-farsi' level={3}>سبد خرید شما</Title>
        <Table
          columns={columns}
          dataSource={cartItems}
          rowKey="idMeal"
          pagination={false}
          summary={() => (
            <>
              <tr>
                <td colSpan={3}>جمع کل</td>
                <td>{totalPrice.toLocaleString()} تومان</td>
              </tr>
              <tr>
                <td colSpan={3}>هزینه ارسال</td>
                <td>{shippingCost.toLocaleString()} تومان</td>
              </tr>
              <tr>
                <td colSpan={3}>تخفیف</td>
                <td>{discount.toLocaleString()} تومان</td>
              </tr>
              <tr className='text-mint-500 '>
                <td colSpan={3}>مبلغ قابل پرداخت</td>
                <td>{finalTotal.toLocaleString()} تومان</td>
              </tr>
            </>
          )}
        />
        <div className='flex items-center justify-start gap-3 laptop:w-1/2 pt-4'>
          <Button type="primary" onClick={handleCheckOut}>
            پرداخت
          </Button>
          <Link to="/shop">ادامه خرید</Link>
        </div>
      </>
    )
  }
}

export default ShopingCart
