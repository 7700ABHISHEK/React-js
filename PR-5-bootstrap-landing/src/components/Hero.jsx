import React from 'react'
import Header from './Header'

const Hero = () => {
    return (
        <div id="main-section" className="vh-100 d-flex flex-column">
            <Header />
            <div className="flex-grow-1 hero background-img-class d-flex justify-content-center align-items-center bg-dark text-white text-center px-3">
                <div className="w-50">
                    <h1 className="pacifico display-5 mb-4">Natural taste from the farm</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias possimus, sapiente nisi dolorum vel perspiciatis!
                    </p>
                    <div className="mt-4 hero-button  d-flex justify-content-center gap-3">
                        <button className="btn btn-light border-black read text-uppercase">Read More</button>
                        <button className="btn btn-danger text-uppercase">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero