import React from 'react'
import TestimonialsCart from './TestimonialsCart'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Testimonials = () => {
    const testimonials = [
        {
            "id": 1,
            "name": "کاربر 1 ",
            "testimonial": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باش",
            "image": "https://picsum.photos/200/300",
            "rate": 4,

        },
        {
            "id": 2,
            "name": "کاربر 2 ",
            "testimonial": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باش",
            "image": "https://picsum.photos/200/300",
            "rate": 5,
        },
        {
            "id": 3,
            "name": "کاربر 3 ",
            "testimonial": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باش",
            "image": "https://picsum.photos/200/300",
            "rate": 4,
        }]
    return (
        <div>
            <Swiper
                className='mySwiper p-2! '
                modules={[Autoplay]}
                autoplay={true}
                loop={true}
                slidesPerView={1}
                spaceBetween={6}

            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id}>
                        <TestimonialsCart image={testimonial.image} name={testimonial.name} testimonial={testimonial.testimonial} rate={testimonial.rate} />
                    </SwiperSlide>

                ))}
            </Swiper>

        </div>
    )
}

export default Testimonials
