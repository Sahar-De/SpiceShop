import { Button } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { CloseSquareOutlined } from '@ant-design/icons'

const MobileNavbar = () => {
    return (
        <div className='mobileNav  font-farsi py-5 px-2 tablet:px-5 bg-white  tablet:w-[91%] absolute top-[105px]  flex flex-col items-start gap-5 laptop:hidden'>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <ul className='flex divide divide-green-500 gap-12 text-menu-links text-sm font-normal'>
                    <li><NavLink to="/">صفحه اصلی</NavLink></li>
                    <li><NavLink to="/shop">فروشگاه  </NavLink></li>
                    <li><NavLink to="/contact">تماس با ما </NavLink></li>
                    <li><NavLink to="/about">درباره ما</NavLink></li>
                </ul>
            </nav>

        </div>
    )
}

export default MobileNavbar