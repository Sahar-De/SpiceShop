import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Badge, Modal, Tabs } from 'antd'
import { ShoppingCartOutlined, UserOutlined, SearchOutlined, LoginOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { login, logOut } from '../slices/AuthSlice'
import { clearCart } from '../slices/CartSlice'
import Logo from '/images/spoon.png'


import SignIn from './SignIn'
import SignUp from './SignUp'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userStatus = useSelector((state) => state.auth.isLoggedIn)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const cartItems = useSelector((state) => state.cart.items)



  const [showModal, setShowModal] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const handlLogOut = () => {

    dispatch(clearCart())
    dispatch(logOut())

  }

  const handleModal = () => {
    setShowModal(!showModal);
  }

  const tabItems = [
    {
      key: "1",
      label: "ورود",
      children: <SignIn onOk={handleModal} />

    },
    {
      key: "2",
      label: "ثبت نام",
      children: <SignUp onOk={handleModal} />

    }
  ]



  return (
    <div className='menuContainer font-farsi  w-full pt-10 tablet:px-5 pb-4 border-b-1 border-b-mint-500/30'>
      <div className='hidden laptop:flex desktopMenu  items-start justify-between'>
        <div className='logo '>
          {/* <img src={Logo} /> */}
          <div className='text-2xl gap-2.5 rounded-md font-bold bg-mint-500 text-white flex items-center justify-between px-2 py-1'>
            <img src={Logo} className='size-10' />
            <span >
              SPICE
            </span>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <ul className='flex gap-12 text-menu-links text-base font-normal'>
            <li><NavLink to="/">صفحه اصلی</NavLink></li>
            <li><NavLink to="/shop">فروشگاه  </NavLink></li>
            <li><NavLink to="/contact">تماس با ما </NavLink></li>
            <li><NavLink to="/about">درباره ما</NavLink></li>
          </ul>
        </nav>
        <div className='actions flex gap-7 items-center'>
          <SearchOutlined />
          <NavLink className='relative' to="/shopingcart">
            <Badge count={totalQuantity} size="small" offset={[-5, 5]} showZero={false}>
              <ShoppingCartOutlined style={{ fontSize: '24px' }} />
            </Badge>
          </NavLink>
          {userStatus && <Link to="/dashboard"><UserOutlined /></Link>}
          {!userStatus ? <Button name='login' onClick={handleModal} type="primary" className='bg-mint-500' icon={<LoginOutlined className='text-white' />} size="large">ورود/عضویت</Button> :
            <Button name='logout' onClick={() => { handlLogOut() }} type="primary" className='bg-mint-500' icon={<LoginOutlined className='text-white' />} size="large">خروج</Button>}


        </div>

      </div>
      <Modal open={showModal} onCancel={handleModal}>
        <Tabs centered defaultActiveKey="1" items={tabItems} />;

      </Modal>


      <div className='mobileMenu flex items-center w-full gap-1 justify-between  laptop:hidden'>
        <input type='text' placeholder='جستجو' className="w-48 h-11 bg-textbox rounded-lg p-2 text-sm" />

        <NavLink className='relative' to="/shopingcart">
          <Badge count={totalQuantity} size="small" offset={[-5, 5]} showZero={false}>
            <ShoppingCartOutlined style={{ fontSize: '24px' }} />
          </Badge>
        </NavLink>
        {userStatus && <Link to="/dashboard"><UserOutlined /></Link>}
        {!userStatus ? <Button name='login' onClick={handleModal} style={{ padding: 2 }} type="primary" className='bg-mint-500' size="small">ورود/عضویت</Button> :
          <Button name='logout' onClick={() => { handlLogOut() }} style={{ padding: 2 }} type="primary" className='bg-mint-500' size="small">خروج</Button>}
        <button id='menuBtn' className='w-11 h-11 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-500 rounded-xl shadow-[0px_10px_20px_0px_rgba(70,163,88,0.30)]' onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
          <img src="../src/assets/mobile/filter.svg" />
        </button>
        {showMobileNavbar && <MobileNavbar />}
      </div>
    </div>
  )
}

export default Navbar
