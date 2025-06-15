import React from 'react'

const FruitsVeg = () => {
    return (
        <div className='py-5 fruit-veg background-img-class'>
            <div className="container">
                <div className="FruitDetail text-center text-white">
                    <h1 className='pacifico'>Fruit & veg boxes delivered weekly <br /> derect to your door</h1>
                    <p>Now ain't that a time saver!</p>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className='p-3'>
                            <img src="https://tk-themes.me/html/html-organici/html/images/ads-1.jpg" alt="organic" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className='p-3'>
                            <img src="https://tk-themes.me/html/html-organici/html/images/ads-6.png" alt="box" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className='p-3'>
                            <img src="https://tk-themes.me/html/html-organici/html/images/ads-3.jpg" alt="fresh" className='img-fluid my-4' />
                            <img src="https://tk-themes.me/html/html-organici/html/images/ads-4.jpg" alt="full" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FruitsVeg