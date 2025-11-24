import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import { ArrowRight, Award, Target, Zap } from 'lucide-react';

const Teaching = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 150
        });
    }, []);

    const benefits = [
        { icon: Award, title: "Expert Recognition", description: "Gain credentials from industry leaders" },
        { icon: Target, title: "Flexible Schedule", description: "Teach at your own pace and time" },
        { icon: Zap, title: "High Income", description: "Competitive compensation packages" }
    ];

    return (
        <div className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="w-11/12 mx-auto">
                <div className='flex lg:flex-row flex-col items-center justify-between gap-12'>
                    {/* Image Section */}
                    <div data-aos="fade-right" className='w-full flex justify-center'>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <img
                                className='w-full max-w-md rounded-2xl shadow-2xl relative'
                                src="/assets/home/teacher-diversity.jpg"
                                alt="Teachers"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div data-aos="fade-left" className='w-full space-y-6'>
                        {/* Header */}
                        <div>
                            <h2 className='text-4xl md:text-5xl font-bold text-white mb-2'>
                                Teach on
                                <span className='block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
                                    IT Tech Platform
                                </span>
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        </div>

                        {/* Description */}
                        <p className='text-gray-400 text-lg leading-relaxed'>
                            Share your expertise with thousands of learners worldwide. Join our community of passionate educators and make a real impact on students' careers. We provide all the tools and support you need to create engaging courses.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 hover:bg-slate-700 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                                            <benefit.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button className='px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group'>
                            <span>Join As Instructor</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                            <div>
                                <p className="text-2xl font-bold text-blue-400">500+</p>
                                <p className="text-xs text-gray-400">Active Teachers</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-400">10K+</p>
                                <p className="text-xs text-gray-400">Students Learning</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-400">4.9★</p>
                                <p className="text-xs text-gray-400">Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teaching;