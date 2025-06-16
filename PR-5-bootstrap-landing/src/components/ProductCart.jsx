import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const ProductCart = () => {

    let productsArr = [
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_1.jpg",
            name: "Apples",
            price: 3.95
        },
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_2.jpg",
            name: "broccoli",
            price: 2.05
        },
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_3.jpg",
            name: "limes",
            price: 0.75
        },
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_4.jpg",
            name: "True Spinach",
            price: 2.00
        },
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_5.jpg",
            name: "Potatoes",
            price: 1.80
        },
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_6.jpg",
            name: "Tomatoes",
            price: 2.85
        },
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_7.jpg",
            name: "Celerys",
            price: 2.09
        },
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_8.jpg",
            name: "Carrots",
            price: 1.05
        },
        {
            image: "https://tk-themes.me/html/html-organici/html/images/product/product_9.jpg",
            name: "Cucumbers",
            price: 1.95
        },

    ]

    return (
        <div className='container mx-auto'>
            <Swiper
                slidesPerView={4}
                loop={true}
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}

                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    productsArr.map((product, idx) =>
                        <SwiperSlide>
                            <div className="product-details bg-white border">
                                <div className='product-img'>
                                    <img src={product.image} className='img-fluid' alt="fruit" />
                                </div>
                                <div className='product-rating'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <h2>{product.name}</h2>
                                    <p className='fw-bold'>${product.price}</p>
                                    <button className='btn btn-danger text-uppercase col-12'>Add to Cart</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div >
    )
}


export default ProductCart