import React from 'react'

const Footer = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-lg-4">
                    <div className="footer-1 my-5">
                        <div>
                            <img src="https://tk-themes.me/html/html-organici/html/images/logo.png" alt="logo"/>
                            <p className='text-muted my-3 w-75'>Maecenas tristique gravida, odio et sagi ttis justo. Suspendisse ultricies nisi veafn. onec dictum non nulla ut lobortis tellus.</p>
                            <ul className='p-0 social-media-icon d-flex gap-2'>
                                <li className='rounded-circle border border-black py-2 px-3'><i className="fa-brands fa-facebook-f"></i></li>
                                <li className='rounded-circle border border-black py-2 px-3'><i className="fa-brands fa-google-plus-g"></i></li>
                                <li className='rounded-circle border border-black py-2 px-3'><i className="fa-brands fa-twitter"></i></li>
                                <li className='rounded-circle border border-black py-2 px-3'><i className="fa-brands fa-youtube"></i></li>
                                <li className='rounded-circle border border-black py-2 px-3'><i className="fa-brands fa-skype"></i></li>
                            </ul>
                            <hr />
                            <p className='m-0 text-muted'>2015 Oganici.</p>
                            <p className='m-0 text-muted'>Designed with ❤️ by TK-Themes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="footer-2 my-5">
                        <div className="contact">
                            <h5>CONTACT</h5>
                            <h5 className='mt-4 fs-6'>Address</h5>
                            <p className='fs-12px text-muted fw-medium'>No 13, Sky Tower Street, New York, USA</p>
                            <h5 className='mt-4 fs-6'>Hotline</h5>
                            <p className='m-0 text-muted fs-12px fw-medium'>(+844) 123 456 78</p>
                            <p className='m-0 text-muted fs-12px fw-medium'>(+844) 123 456 78</p>
                            <h5 className='mt-4 fs-6'>Email</h5>
                            <p className='fs-12px text-muted fw-medium'>contact@organicistore.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="footer-3 my-5">
                        <div className="working-time">
                            <h5 className='text-uppercase'>Working time</h5>
                            <ul className='working-hours p-0 mt-4'>
                                <li className='fs-6'>
                                    <span className='text-muted'>Monday to Friday:</span>
                                    <span className='mx-3'>08:00am - 08:00pm</span>
                                </li>
                                <li className='fs-6'>
                                    <span className='text-muted'>Saturday & Sunday:</span>
                                    <span className='mx-3'>10:00am - 06:00pm</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer