import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sparkles } from 'lucide-react';

const ItShow = () => {
    useEffect(() => {
        AOS.init({ duration: 800, offset: 150 });
    }, []);

    return (
        <div className='w-11/12 mx-auto py-16'>
            <div className="relative mt-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative py-20 px-6 md:px-12">
                    <div 
                        data-aos="fade-up"
                        className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-2xl py-16 px-8 w-full lg:w-2/3 mx-auto text-center shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                    >
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            IT Tech
                            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                Platform
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl mx-auto">
                            Welcome to IT Tech, your premier destination for comprehensive technology education and professional development. We deliver cutting-edge courses designed by industry experts to transform your career.
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 mb-6">
                            <div>
                                <p className="text-3xl font-bold text-blue-400">1000+</p>
                                <p className="text-sm text-gray-400">Active Students</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-blue-400">50+</p>
                                <p className="text-sm text-gray-400">Expert Courses</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-blue-400">95%</p>
                                <p className="text-sm text-gray-400">Success Rate</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                            Start Learning Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItShow;