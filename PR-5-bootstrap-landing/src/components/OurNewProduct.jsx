import React from 'react'
import ProductCart from './ProductCart'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';

const OurNewProduct = () => {
    return (
        <div className='py-5'>
            <div className="product-details text-center">
                <h1 className='pacifico'>Our new product</h1>
                <p className='fs-12px'>Maecenas tristique gravida odio, et sagi ttis justo interdum porta. Duis et lacus mattis, tincidunt eronec dictum non nulla.
                </p>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <ProductCart />
                </Swiper>
            </div>
        </div>
    )
}

export default OurNewProduct