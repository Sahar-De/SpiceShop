import React from 'react'
import { Layout, Button, Slider, Pagination } from 'antd'
import Banner from './Banner'
import Carts from './Carts'
import SwipSlide from './SwipeSlide'
import SendInfo from './SendInfo'
const { Header, Content, Sider } = Layout

const MainPage = () => {
    return (
        <Layout>
            <Header style={{ background: '#fff', padding: 0, height: 'auto' }}>
                <Banner />
            </Header>
            <Layout style={{ paddingTop: 80 }}>
                <Content className='sliderContainer font-farsi'>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">درباره رستوران اسپایس</h2>
                    <div className="prose prose-lg text-gray-600 max-w-none flex flex-col items-center justify-center">
                        <p className="text-justify leading-relaxed">
                            رستوران آنلاین  اسپایس با عشق به غذا و احترام به ذائقه‌های اصیل ایرانی متولد شد. ما با استفاده از بهترین مواد اولیه و دستورهای خانگی، طعمی به یادماندنی را برای شما به ارمغان می‌آوریم.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">چرا ما؟</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-green-600 ml-2">✔</span>
                                    <span>غذاهای باکیفیت و تازه</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 ml-2">✔</span>
                                    <span>پخت روزانه با مواد اولیه سالم</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 ml-2">✔</span>
                                    <span>تحویل سریع و بسته‌بندی مناسب</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 ml-2">✔</span>
                                    <span>تنوع منوی اصیل و مدرن</span>
                                </li>
                            </ul>
                        </div>

                        <p className="mt-6 text-center text-gray-800 font-medium">
                            اعتماد شما سرمایه ماست. شیرین‌ترین لحظات را با طعم‌های به یادماندنی ما تجربه کنید!
                        </p>
                    </div>
                    <SendInfo />

                    <SwipSlide title={"جدیدترین ها"} desc={"  جدیدترین غذاهای ایرانی"} />

                    <div className='pt-20 flex flex-col laptop:flex-row w-full items-center justify-between gap-y-14 gap-x-4'>
                        <Carts image={"/images/cart1.png"} link={"گیاه خواری"} text={"خوراک های مخصوص گیاهخواران"} title={"خوراک های مخصوص گیاهخواران"} />
                        <Carts image={"/images/cart3.png"} link={"غذای رژیمی"} title={"انواع غذاهای سالم و کم کالری"} text={"غذاهای رزیمی"} />
                    </div>
                    <SwipSlide title={"تخفیف دارها"} discount={'10%'} desc={"     خوراک های بینالمللی و با کیفیت باقیمت مناسب   ."} />
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainPage