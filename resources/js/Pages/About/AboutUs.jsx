import Main from '@/Layouts/Main';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Award, Users, Building2, Zap, Mail, Linkedin, Twitter } from 'lucide-react';
import './About.css';

const AboutUs = ({ auth }) => {
    useEffect(() => {
        AOS.init({ duration: 800, offset: 150 });
    }, []);

    const stats = [
        { icon: Award, number: '10+', label: 'Years Experience', color: 'blue' },
        { icon: Users, number: '100+', label: 'Clients', color: 'green' },
        { icon: Building2, number: '50+', label: 'Locations', color: 'purple' },
        { icon: Zap, number: '20M+', label: 'Impact', color: 'yellow' }
    ];

    const teamMembers = [
        { name: 'Johnny Walker', role: 'Web Designer', image: '/assets/about/team-1.jpg' },
        { name: 'Azim Iyafu', role: 'Web Designer', image: '/assets/about/team-2.jpg' },
        { name: 'Nixim Monir', role: 'Web Designer', image: '/assets/about/team-3.jpg' },
        { name: 'Yang Chu', role: 'Web Designer', image: '/assets/about/team-4.jpg' }
    ];

    return (
        <Main auth={auth}>
            <Head title='About Us' />

            {/* Banner Section */}
            <div className="relative h-60 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center aboutbgimg">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
                    <div className="flex items-center justify-center gap-2">
                        <Link href={route('/')} className="text-blue-400 hover:text-blue-300 transition">Home</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-300">About Us</span>
                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto py-20'>
                {/* Section Title */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>About Our Company</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Our Company Section */}
                <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mb-20'>
                    <div data-aos="fade-right" className='w-full lg:w-1/2'>
                        <img className='w-full h-96 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300' src={'/assets/about/about-1.jpg'} alt="Company" />
                    </div>
                    <div data-aos="fade-left" className='w-full lg:w-1/2'>
                        <h2 className='text-3xl font-bold text-white mb-6'>Our Company</h2>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6"></div>
                        <p className='text-gray-400 text-lg leading-relaxed mb-4'>
                            We are a leading technology education platform dedicated to empowering individuals with cutting-edge skills and knowledge. Our commitment to excellence has made us a trusted partner for thousands of learners worldwide.
                        </p>
                        <p className='text-gray-400 text-lg leading-relaxed'>
                            With a team of industry experts and passionate educators, we continue to innovate and deliver world-class learning experiences that transform careers and shape futures.
                        </p>
                    </div>
                </div>

                {/* Our Mission Section */}
                <div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-12 mb-20'>
                    <div data-aos="fade-left" className='w-full lg:w-1/2'>
                        <img className='w-full h-96 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300' src={'/assets/about/about-2.jpg'} alt="Mission" />
                    </div>
                    <div data-aos="fade-right" className='w-full lg:w-1/2'>
                        <h2 className='text-3xl font-bold text-white mb-6'>Our Mission</h2>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6"></div>
                        <p className='text-gray-400 text-lg leading-relaxed mb-4'>
                            Our mission is to democratize quality education by making it accessible, affordable, and engaging for everyone. We believe that knowledge is the key to unlocking human potential.
                        </p>
                        <p className='text-gray-400 text-lg leading-relaxed'>
                            Through innovative teaching methods and state-of-the-art technology, we aim to create a community of lifelong learners who are equipped to succeed in an ever-changing digital world.
                        </p>
                    </div>
                </div>

                {/* Our Vision Section */}
                <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mb-20'>
                    <div data-aos="fade-right" className='w-full lg:w-1/2'>
                        <img className='w-full h-96 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300' src={'/assets/about/about-3.jpg'} alt="Vision" />
                    </div>
                    <div data-aos="fade-left" className='w-full lg:w-1/2'>
                        <h2 className='text-3xl font-bold text-white mb-6'>Our Vision</h2>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6"></div>
                        <p className='text-gray-400 text-lg leading-relaxed mb-4'>
                            We envision a world where quality education transcends geographical boundaries and economic limitations. A world where every individual has the opportunity to learn, grow, and achieve their dreams.
                        </p>
                        <p className='text-gray-400 text-lg leading-relaxed'>
                            By leveraging technology and human expertise, we're building the future of education today.
                        </p>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className='bg-gradient-to-r from-slate-800 to-slate-900 py-16 my-20'>
                <div className='w-11/12 mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group relative bg-slate-700 bg-opacity-50 rounded-2xl p-8 text-center hover:bg-opacity-100 transition-all duration-300 border border-slate-600 hover:border-blue-500"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                                <p className="text-gray-400 font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className='w-11/12 mx-auto py-20'>
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>Meet Our Team</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-400 text-lg mt-6">Talented professionals dedicated to your success</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden bg-slate-950">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Social Links Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-blue-400 hover:text-white transition-all">
                                        <Mail className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-blue-400 hover:text-white transition-all">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-blue-400 hover:text-white transition-all">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-4"></div>
                                <p className="text-gray-400 text-sm">
                                    Dedicated professional bringing expertise and passion to every project.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Main>
    );
};

export default AboutUs;