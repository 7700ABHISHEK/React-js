
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">
                        <img src="https://saaspik.pixelsigns.art/saaspik/assets/img/main-logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <a className="nav-link active text-white text" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white text" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white text dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white text" aria-disabled="true">Pages</a>
                            </li>
                        </ul>
                        <div>
                            <button className='btn explore-btn py-2 px-4'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header