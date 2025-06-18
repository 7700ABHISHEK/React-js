import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
        message: "Fresh, local, and organic—exactly what I need for my lifestyle. Highly recommended!",
    },
];

const TestimonialSection = () => {
    return (
        <section className="bg-green-50 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-800 mb-12">
                    What Our Customers Say
                </h2>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    breakpoints={{
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
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white shadow-lg rounded-2xl p-6 h-full flex flex-col justify-between relative hover:shadow-xl transition">
                                <FaQuoteLeft className="text-green-300 text-2xl absolute top-4 left-4" />
                                <p className="text-gray-700 italic mt-6 mb-4">{testimonial.message}</p>
                                <FaQuoteRight className="text-green-300 text-2xl absolute bottom-4 right-4" />

                                <div className="mt-6 flex flex-col items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-green-300"
                                    />
                                    <h3 className="text-lg font-semibold text-green-900 mt-2">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-green-600">{testimonial.title}</p>
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
