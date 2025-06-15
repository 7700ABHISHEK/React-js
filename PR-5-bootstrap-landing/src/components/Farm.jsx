import React from 'react'

const Farm = () => {
    return (
        <div id='look-at-farm' className='container py-5'>
            <div className='row align-items-center'>
                {/* Text Content */}
                <div className="col-md-7 col-12 mb-5">
                    <div className="text-center text-md-start px-3 px-md-5">
                        <h2 className='pacifico mb-4'>Have a look at our beautiful farm!</h2>
                        <p className='text-muted mb-3'>
                            Maecenas tristique gravida odio, et sagittis justo interdum porta. Duis et lacus mattis, tincidunt eros.
                        </p>
                        <p className='text-muted'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Quisque pretium nulla nec risus laoreet, eu vestibulum magna pellentesque.
                        </p>
                        <div className="my-4">
                            <img
                                src="https://tk-themes.me/html/html-organici/html/images/signature.png"
                                alt="signature"
                                className="img-fluid"
                                style={{ maxWidth: '150px' }}
                            />
                        </div>
                        <button className='btn btn-danger px-4 py-2 rounded-pill shadow'>Read More</button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="col-md-5 col-12 text-center">
                    <img
                        src="https://tk-themes.me/html/html-organici/html/images/stack/stack-4.jpg"
                        alt="farm"
                        className="img-fluid rounded-4 shadow"
                    />
                </div>
            </div>
        </div>
    )
}

export default Farm
