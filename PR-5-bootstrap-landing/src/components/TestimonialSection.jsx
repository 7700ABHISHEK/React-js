import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay } from "swiper/modules";

const testimonials = [
    {
        id: 1,
        name: "Emily Johnson",
        title: "Nutritionist",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        message: "Organici has completely transformed the way I eat and live. Their organic products are top-notch!",
    },
    {
        id: 2,
        name: "Michael Lee",
        title: "Health Blogger",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        message: "Amazing selection of healthy, organic produce. Their service is always reliable and fast.",
    },
    {
        id: 3,
        name: "Sarah Williams",
        title: "Yoga Instructor",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        message: "Amazing Fruits i love to eat it what I need for my lifestyle. Highly recommended!",
    },
    {
        id: 4,
        name: "Sarah Tendulkar",
        title: "Cricket Instructor",
        image: "https://randomuser.me/api/portraits/women/35.jpg",
        message: "Fresh, Healthy, Tasty and Budget Friendly. what I need for my lifestyle. Highly recommended!",
    },
    {
        id: 5,
        name: "John johnson",
        title: "Karate specialist",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        message: "Fresh, local, and organic—exactly what it should be and also resonable. Highly recommended!",
    },
    {
        id: 6,
        name: "Kaushal Sharma",
        title: "Desi Developer",
        image: "https://randomuser.me/api/portraits/men/37.jpg",
        message: "Fresh, local, and organic—exactly what I need for my lifestyle. Highly recommended!",
    },
];

const TestimonialSection = () => {
    return (
        <section className="py-5">
            <div className="container text-center">
                <h2 className="fw-bold text-success mb-5">
                    What Our Customers Say
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white shadow rounded-3 p-4 h-100 d-flex flex-column justify-content-between position-relative transition-all">
                                <FaQuoteLeft className="text-success position-absolute top-0 start-0 m-3 fs-4" />
                                <p className="text-muted fst-italic mt-4 mb-3">{testimonial.message}</p>
                                <FaQuoteRight className="text-success position-absolute bottom-0 end-0 m-3 fs-4" />

                                <div className="mt-4 d-flex flex-column align-items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-circle border border-2 border-success"
                                        style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                    />
                                    <h3 className="h6 fw-semibold text-success mt-2">{testimonial.name}</h3>
                                    <p className="text-success small">{testimonial.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
};

export default TestimonialSection;
