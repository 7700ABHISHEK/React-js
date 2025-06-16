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
import CustomerReview from './components/CustomerReview';
import Footer from './components/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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
            <CustomerReview />
            <Footer />
        </div>
    )
}

export default App
