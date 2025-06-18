import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import Hero from './components/Hero';
import Farm from './components/Farm';
import FeatureProduct from './components/FeatureProduct';
import DealOfTheDay from './components/DealOfTheDay';
import OrganicProduct from './components/OrganicProduct';
import OurNewProduct from './components/OurNewProduct';
import FruitsVeg from './components/FruitsVeg';
import Footer from './components/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialSection from './components/CustomerReview';


const App = () => {
    return (
        <div>
            <Hero />
            <Farm />
            <FeatureProduct />
            <DealOfTheDay />
            <OrganicProduct />
            <OurNewProduct />
            <FruitsVeg />
            <TestimonialSection />
            <Footer />
        </div>
    )
}

export default App
