import React from 'react'

const Accordion = () => {
    return (
        <section>
            <div className="container py-5">
                <div className='d-flex justify-content-center'>
                    <div className="accordion border accordion-flush w-75" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    UI/UX Design
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body line-height">
                                    UI (User Interface) and UX (User Experience) design focus on crafting digital experiences that are both functional and visually appealing. While UI design is about the look and layout—colors, typography, buttons, and interactive elements—UX design
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Full Stack Web Development
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body line-height">
                                    Full stack web development refers to the comprehensive development of both the front-end (client-side) and back-end (server-side) of web applications. A full stack developer is skilled in technologies like HTML, CSS, JavaScript (with frameworks like Angular or React)
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Cyber Security
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body line-height">
                                    Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, cyberattacks, and breaches. It encompasses various domains such as network security, application security, information security, and ethical hacking.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    AI/ML
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body line-height">
                                    AI/ML involves creating systems that can simulate human intelligence and learn from data to make decisions, predictions, or automate tasks. Artificial Intelligence focuses on building intelligent agents capable of reasoning and problem-solving, while Machine Learning
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='d-flex justify-content-center my-5'>
                    <button className='btn explore-btn py-2 px-4'>Explore Forum</button>
                </div>
            </div>
        </section>
    )
}

export default Accordion