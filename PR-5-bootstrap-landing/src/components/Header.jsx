import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='container'>
            <div className="header lato-sans d-flex align-items-center justify-content-between py-3">
                <div className="logo cursor">
                    <img src="https://tk-themes.me/html/html-organici/html/images/logo.png" alt="logo" />
                </div>
                <ul className='text-uppercase d-flex m-0 p-0 gap-5 d-none d-lg-flex fw-medium'>
                    <li className='header-text'>Home</li>
                    <li className='header-text'>About</li>
                    <li className='header-text'>Shop</li>
                    <li className='header-text'>boxes</li>
                    <li className='header-text'>blog</li>
                    <li className='header-text'>contact</li>
                </ul>
                <Button variant="" className='d-flex d-lg-none' onClick={handleShow}>
                    <i className="fa-solid fa-bars"></i>
                </Button>
            </div>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><img src="https://tk-themes.me/html/html-organici/html/images/logo.png" alt="logo" /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='text-uppercase m-0 p-0'>
                        <li className='mb-3'>Home</li>
                        <li className='mb-3'>About</li>
                        <li className='mb-3'>Shop</li>
                        <li className='mb-3'>boxes</li>
                        <li className='mb-3'>blog</li>
                        <li className='mb-3'>contact</li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header