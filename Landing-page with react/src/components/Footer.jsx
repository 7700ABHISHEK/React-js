import React from 'react'
import FooterCol3 from './FooterCol3'

const Footer = () => {
    let main = {
        company: ["Features", "Dashboard & Tool", "Our Portfolio", "About Us", "Get In Touch"],
        services: ["Web Design", "Development", "Wordpress", "Online Marketing", "Content"],
        digitalExperience: ["Web Design", "Mobile App Design", "UX / UI design", "Dashboard & Tool", "Logo & Identity"]
    }

    return (
        <footer className='py-5'>
            <div className="container">
                <div className="row">
                    <FooterCol3 main="Company" listData={main.company} />
                    <FooterCol3 main="Services" listData={main.services} />
                    <FooterCol3 main="Digital Experience" listData={main.digitalExperience} />
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3 className='mt-5'>Our Address</h3>
                            <p className='my-4 color-footer'>Lavaca Street, Suite 24, Road Apt <br /> New York, USA</p>
                        </div>
                        <ul className='d-flex flex-wrap gap-3 p-0'>
                            <li className='border py-2 px-3 explore-btn text-black rounded-circle'><i class="fa-brands fa-facebook-f"></i></li>
                            <li className='border py-2 px-3 explore-btn text-black rounded-circle'><i class="fa-brands fa-twitter"></i></li>
                            <li className='border py-2 px-3 explore-btn text-black rounded-circle'><i class="fa-brands fa-google-plus-g"></i></li>
                            <li className='border py-2 px-3 explore-btn text-black rounded-circle'><i class="fa-brands fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer