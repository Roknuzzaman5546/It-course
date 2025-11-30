import React, { useState, useEffect } from 'react';
import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactUs.css'

const ContactUs = ({ auth }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, offset: 150 });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Address',
            details: ['demo@support.com', 'support@ittech.com']
        },
        {
            icon: Phone,
            title: 'Phone Number',
            details: ['(+880) 1234 567890', '(+880) 9876 543210']
        },
        {
            icon: MapPin,
            title: 'Office Location',
            details: ['Dhaka, Bangladesh', 'Tech Park Building']
        }
    ];

    return (
        <Main auth={auth}>
            <Head title="Contact Us" />

            {/* Banner Section */}
            <div className="relative contactbgimg h-80 bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get In Touch</h1>
                    <p className="text-gray-300 text-lg">We'd love to hear from you. Send us a message!</p>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="w-11/12 mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform">
                                    <info.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>

                            {/* Details */}
                            <div className="space-y-2">
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                                        {detail}
                                    </p>
                                ))}
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-20" data-aos="fade-up">
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
                        <span className="text-gray-500 font-semibold">Send us a Message</span>
                        <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Contact Form */}
                <div data-aos="fade-up" className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Drop Us a Message</h2>

                        <div onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-3">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-3">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500"
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-3">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="(+880) 1234 567890"
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-3">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Write your message here..."
                                    rows="6"
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                            >
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Info Text */}
                            <p className="text-center text-gray-400 text-sm">
                                We'll get back to you as soon as possible!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Section (Optional) */}
                <div data-aos="fade-up" className="mt-20">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Find Us On Map</h2>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl h-96">
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                                <p className="text-gray-400 text-lg">Interactive map coming soon</p>
                                <p className="text-gray-500 text-sm mt-2">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default ContactUs;