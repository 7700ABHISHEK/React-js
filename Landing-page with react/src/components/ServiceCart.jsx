import React from 'react'

const ServiceCart = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="services py-3 px-3 my-4 border">
                <div className="services-inner">
                    <div className='my-4'>
                        <img src={props.img} alt="service" />
                    </div>
                    <div className="service-detail line-height">
                        <h2>{props.heading}</h2>
                        <p>{props.des}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCart