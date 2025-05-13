import React from 'react'

const Accordion = () => {
    return (
        <section>
            <div className="container py-5">
                <div className='d-flex justify-content-center'>
                    <div class="accordion border accordion-flush w-75" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    UI/UX Design
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body line-height">
                                    UI (User Interface) and UX (User Experience) design focus on crafting digital experiences that are both functional and visually appealing. While UI design is about the look and layout—colors, typography, buttons, and interactive elements—UX design ensures the entire journey of the user through the product is smooth, intuitive, and satisfying. Good UI/UX design improves usability, accessibility, and engagement, directly impacting how users perceive and interact with a website or application.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Full Stack Web Development
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body line-height">
                                    Full stack web development refers to the comprehensive development of both the front-end (client-side) and back-end (server-side) of web applications. A full stack developer is skilled in technologies like HTML, CSS, JavaScript (with frameworks like Angular or React), as well as back-end languages like Node.js, Python, or PHP, and databases like MongoDB or SQL. They are capable of managing the entire development lifecycle, from designing responsive user interfaces to handling server logic, APIs, and database interactions, making them highly versatile in building end-to-end web solutions.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Cyber Security
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body line-height">
                                    Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, cyberattacks, and breaches. It encompasses various domains such as network security, application security, information security, and ethical hacking. With the growing reliance on digital infrastructure, cybersecurity plays a critical role in safeguarding sensitive information, ensuring data integrity, and maintaining the trust of users and organizations. Effective cybersecurity involves continuous risk assessment, implementation of security protocols, and staying ahead of evolving threats.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    AI/ML
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body line-height">
                                    AI/ML involves creating systems that can simulate human intelligence and learn from data to make decisions, predictions, or automate tasks. Artificial Intelligence focuses on building intelligent agents capable of reasoning and problem-solving, while Machine Learning is a subset that trains algorithms on large datasets to recognize patterns and improve over time. These technologies are used in applications like recommendation systems, natural language processing, computer vision, and autonomous systems, driving innovation across industries from healthcare to finance and beyond.
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