import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import { Users, BookOpen, BarChart3 } from 'lucide-react';
import Title from '../Shared/Title';

const StatCard = ({ icon: Icon, label, value, delay }) => (
    <div
        data-aos="fade-up"
        data-aos-delay={delay}
        className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:border-opacity-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
        {/* Icon */}
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-white" />
            </div>
        </div>

        {/* Value */}
        <h3 className="text-5xl font-bold text-white text-center mb-2">
            {value}
        </h3>

        {/* Label */}
        <p className="text-center text-gray-400 font-semibold">
            {label}
        </p>

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
    </div>
);

const Total = () => {
    const stats = [
        { icon: Users, label: "Total Users", value: "2,500+" },
        { icon: BookOpen, label: "Total Enrollments", value: "5,800+" },
        { icon: BarChart3, label: "Total Courses", value: "50+" }
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 150
        });
    }, []);

    return (
        <div className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="w-11/12 mx-auto">
                <Title
                    heading="Our Impact & Achievements"
                    Subheading="See Our Growth Numbers"
                />

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 my-16">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            label={stat.label}
                            value={stat.value}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Total;