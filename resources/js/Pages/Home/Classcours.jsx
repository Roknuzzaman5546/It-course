import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Classes from '../AllClass/Classes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sparkles } from 'lucide-react';

const Title = ({ heading, Subheading }) => (
    <div className="text-center mb-16" data-aos="fade-up">
        <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Featured Courses
            </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {heading}
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {Subheading}
            </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our carefully curated collection of industry-leading courses
        </p>
    </div>
);


const Classcourse = ({classData}) => {
    return (
        <div className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="w-11/12 mx-auto">
                <Title
                    heading="Classes & Courses"
                    Subheading="Our Most Popular Picks"
                />

                {/* Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-12">
                    {classData.slice(0, 12).map((item, index) => (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={index * 50}>
                            <Classes item={item} />
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center" data-aos="fade-up">
                    <a href="/allClasses">
                        <button className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                            <span>Explore All Classes</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Classcourse;