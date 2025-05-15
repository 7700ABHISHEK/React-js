import React from 'react'

const Main = () => {
    return (
        <section className='main text-white'>
            <div className="container">
                <div className="main-section-heading py-5">
                    <h1 className='text-center display-4 fw-bold'>
                        Understanding <br /> the business of Saas
                    </h1>
                    <p className='text-center fw-semibold my-4 fs-5'>
                        Why I say old chap that is spifing quaint the little rotter blag, tosser  <br />
                        cockup lavatory skive off down the pub.!
                    </p>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
                    <button className='btn explore-btn py-3 px-5'>Free Trial</button>
                    <div className='d-flex align-items-center'>
                        <a href="https://youtu.be/9No-FiEInLA?" className="glightbox">
                            <button className='btn explore-btn mx-2 p-3'>
                                <i className="fa-solid fa-video"></i>
                            </button>
                        </a>
                        <p className='p-0 m-0 fw-semibold'>Watch Video</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <div style={{
                        maxWidth: "970px",
                    }}>
                        <img src="https://saaspik.pixelsigns.art/saaspik/media/banner/mockup3.jpg" alt="promotion" className='img-fluid promotion-img rounded' width="100%" height="100%"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main