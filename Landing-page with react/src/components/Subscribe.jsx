import React from 'react'

const Subscribe = () => {
    return (
        <section className='main padding mt-5'>
            <div className="container">
                <div className="subscribe2">
                    <h1 className='text-center text-white fw-bold display-6'>
                        Comprueba ahora como <br />
                        pixsaas trabaja para tu asesoria
                    </h1>
                    <p className='text-center mt-4 text-white fs-5 fw-semibold'>
                        Solicita una demo personalizada para descubrir como pixsaas puede ayudarte a mejorar la <br />
                        gestion de los clientes de tu despacho profesional.
                    </p>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7">
                            <div className='d-flex justify-content-center my-5'>
                                <input type="email" placeholder='Enter Your Email' className='main input form-control' />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='d-flex justify-content-center'>
                                <button className='btn explore-btn py-3 px-5'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe