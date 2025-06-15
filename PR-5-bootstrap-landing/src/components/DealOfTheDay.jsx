import React from 'react';

const DealOfTheDay = () => {
    return (
        <div id="deal-of-the-day" className="py-5 bg-light">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center mb-5">
                    <h2 className=" display-5" style={{ fontFamily: 'Pacifico, cursive' }}>
                        Deal of the Day
                    </h2>
                    <p className="text-muted small">
                        Maecenas tristique gravida odio, et sagittis justo interdum porta.
                    </p>
                </div>

                {/* Deal Content */}
                <div className="row align-items-center g-4">
                    {/* Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src="https://tk-themes.me/html/html-organici/html/images/image-01.png"
                            className="img-fluid rounded shadow-sm hover-zoom"
                            alt="Green Apples"
                        />
                    </div>

                    {/* Details */}
                    <div className="col-md-6">
                        <div className="p-4">
                            <h4 className="text-uppercase fw-semibold text-muted mb-2">Green Apples</h4>
                            <h1 className="display-5 text-danger fw-bold my-3">$3.15</h1>
                            <p className="text-muted mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="mb-4 text-secondary">
                                <strong>Category:</strong> Fruit
                            </p>
                            <button className="btn btn-danger px-4 py-2 rounded-pill shadow-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealOfTheDay;
