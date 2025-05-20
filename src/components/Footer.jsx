import { Button } from 'antd'
import { } from '@ant-design/icons'
import React from 'react'

const Foooter = () => {
    return (
        <div className='flex flex-col font-farsi'>
            <div className='flex flex-col laptop:flex-row gap-y-5 gap-x-14 p-6'>
                <div className='flex flex-col gap-y-5 laptop:flex-row w-full  laptop:w-2/3 gap-x-14'>
                    <div className='flex flex-col gap-2 items-start'>
                        <img src='/images/icons8-pasta-64.png' className='size-16' />
                        <h6 className='text-sm font-bold'>ایتالیایی</h6>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <img src='/images/icons8-meat-80.png' className='size-16' />
                        <h6 className='text-sm font-bold'>انواع کباب </h6>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <img src='/images/icons8-burger-100.png' className='size-16' />
                        <h6 className='text-sm font-bold'>فست فود</h6>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                    </div>
                </div>

                <div className='newsLetters flex flex-col justify-center gap-4 w-full laptop:w-1/3'>
                    <p className='text-dark font-bold'>از آخرین اخبار مطلع شوید</p>
                    <div className='flex flex-wrap items-center'>
                        <input className='bg-white border border-lightgray rounded-md p-2' type='text' placeholder='email' /><Button type='primary'>ارسال</Button>
                    </div>
                    <p className='text-dark text-xs'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                </div>
            </div>
            <div className='w-full p-5 gap-y-2  flex flex-col tablet:flex-row items-start tablet:items-center justify-evenly bg-mint-500/30 border-1 border-mint-500 h-auto'>
                <img src="/images/Logo.png" />
                <div className='flex gap-1'><img src="/images/Location.png" /><span className='text-xs text-dark'>الیاایا لاشسعغه تشساتیاستا767 767تسشا676</span></div>

                <div className='flex gap-1'><img src="/images/Calling.png" /><span className='text-xs text-dark'>021-567789087</span></div>

                <div className='flex gap-1'><img src="/images/Message.png" /><span className='text-xs text-dark'>greenshop@info.com</span></div>
            </div>
            <div>
                <p className='text-center text-gray-500 font-semibold text-sm py-4'>© 2021 GreenShop. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Foooter