import { Sparkles } from 'lucide-react';

const Title = ({ Subheading, heading }) => {
    return (
        <div data-aos="zoom-in" className="mb-16 mt-8">
            <div className="text-center">
                {/* Badge */}
                <div className="inline-block mb-6">
                    <span className="px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        {Subheading}
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {heading}
                    <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Excellence
                    </span>
                </h1>

                {/* Decorative Line */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Discover our comprehensive collection of professional courses
                </p>
            </div>
        </div>
    );
};

export default Title;