import React from 'react'

const Card = (props) => {
    return (
        <div className="col-lg-4 mt-4">
            <div className="services py-3 px-2 border">
                <div className="inner mx-5">
                    <div>
                        <img src={props.serviceImg} alt="service" />
                    </div>
                    <div>
                        <h3 className="my-4">{props.serviceH}</h3>
                        <p className="line-height">
                            {props.serviceD}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card