import { Link } from "@inertiajs/react";
import { FaArrowRight } from "react-icons/fa6";
import { Sparkles, BookOpen } from 'lucide-react';

const Classes = ({ item }) => {
    const { name, title, img, price, totalEnrolment } = item;

    return (
        <div
            data-aos="fade-up"
            className="group h-full"
        >
            <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-blue-500 hover:border-opacity-50 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src={img}
                        alt={name}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Price Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl text-sm shadow-lg">
                            ${price}
                        </span>
                    </div>

                    {/* Enrollment Badge */}
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 bg-slate-800 bg-opacity-90 text-gray-300 rounded-full text-xs font-semibold border border-slate-600">
                            {totalEnrolment} enrolled
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Course Name */}
                    <h3 className="text-lg font-bold text-white line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
                        {name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {title}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                        <BookOpen className="w-4 h-4 text-blue-400" />
                        <span>Comprehensive curriculum</span>
                    </div>

                    {/* Button */}
                    <button className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2">
                        <span>View Details</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default Classes;
