import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Star, ArrowRight } from 'lucide-react';

export default function Partnership() {
    useEffect(() => {
        AOS.init({ duration: 900, offset: 150 });
    }, []);

    const partners = [
        {
            img: '/assets/home/partimage1.jpg',
            name: 'Creative IT',
            text: 'Delivering next-gen technology & enterprise-grade training solutions.',
            rating: 4.9,
        },
        {
            img: '/assets/home/partimage2.png',
            name: 'Datasoft',
            text: 'Empowering businesses with innovative enterprise solutions.',
            rating: 4.8,
        },
        {
            img: '/assets/home/partimage3.jpg',
            name: 'IT Clan',
            text: 'Expert solutions and digital transformation partnerships.',
            rating: 4.7,
        },
        {
            img: '/assets/home/partimage4.png',
            name: 'Kazi Ltd.',
            text: 'A strong pillar in growth and technological excellence.',
            rating: 4.9,
        },
    ];

    return (
        <div className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="w-11/12 mx-auto">
                {/* Title Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-semibold">
                            Our Partners
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Most Trusted Partners in
                        <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            IT Industry
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Collaborating with industry leaders to deliver exceptional learning experiences and innovative solutions
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partners.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:border-blue-500 hover:border-opacity-50 hover:-translate-y-2">
                                {/* Partner Image */}
                                <div className="flex justify-center mb-6 relative">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Partner Name */}
                                <h3 className="text-center text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {item.name}
                                </h3>

                                {/* Rating */}
                                <div className="flex justify-center items-center gap-2 mb-4">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < Math.floor(item.rating)
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-gray-600'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-400">{item.rating}</span>
                                </div>

                                {/* Description */}
                                <p className="text-center text-gray-300 text-sm leading-relaxed flex-grow mb-4">
                                    {item.text}
                                </p>

                                {/* Button */}
                                <button className="w-full mt-auto py-2.5 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2">
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16" data-aos="fade-up">
                    <p className="text-gray-400 mb-6">
                        Want to partner with us?
                    </p>
                    <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}