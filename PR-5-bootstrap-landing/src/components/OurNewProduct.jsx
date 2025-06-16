import ProductCart from './ProductCart'
import { Swiper, SwiperSlide } from 'swiper/react'

const OurNewProduct = () => {
    return (
        <div className='py-5 new-product background-img-class'>
            <div className="product-details text-center">
                <h1 className='pacifico'>Our new product</h1>
                <p className='fs-12px fw-medium'>Maecenas tristique gravida odio, et sagi ttis justo interdum porta. Duis et lacus mattis, tincidunt eronec dictum non nulla.
                </p>
                <ProductCart/>                
            </div>
        </div>
    )
}

export default OurNewProduct