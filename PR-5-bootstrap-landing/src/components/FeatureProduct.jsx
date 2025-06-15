import React from 'react'

const FeatureProduct = () => {
    return (
        <div id='feature-product' className='py-5 feature-product background-img-class'>
            <div className="heading lato-sans text-center text-white">
                <h1 className='pacifico'>Featured products</h1>
                <p className='fs-12px'>Maecenas tristique gravida odio, et sagi ttis justo interdum porta</p>
            </div>
            <div className="row my-5">
                <div className="col-md-6">
                    <div className="product-details px-3 text-end text-white">
                        <h2 className='mb-3'>Passion fruit</h2>
                        <p className='fs-12px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
                        <div className="display-3 fw-semibold">
                            $14.00
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-detail">
                        <img src="https://tk-themes.me/html/html-organici/html/images/passion.png" alt="product-img" className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-detail my-5 d-flex justify-content-end">
                        <img src="https://tk-themes.me/html/html-organici/html/images/pomegranate.png" alt="product-img" className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-details px-3 my-5">
                        <h2 className='mb-3'>Pomegranates</h2>
                        <p className='fs-12px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
                        <div className="display-3 fw-semibold">
                            $3.90
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-danger text-uppercase'>View All Product</button>
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct