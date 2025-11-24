import { Head } from "@inertiajs/react";
import Classes from "./Classes";
import { useEffect, useState } from "react";
import Main from "@/Layouts/Main";
import { Search, Filter, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Allclasses = ({ auth }) => {
    const [classes, setClasses] = useState([]);
    const [filteredClasses, setFilteredClasses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [selectedEnrollment, setSelectedEnrollment] = useState('all');

    useEffect(() => {
        AOS.init({ duration: 800, offset: 150 });
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setFilteredClasses(data);
            })
            .catch(error => console.error('Error loading classes:', error));
    }, []);

    // Filter and Search Logic
    useEffect(() => {
        let result = classes;

        // Search Filter
        if (searchTerm) {
            result = result.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Price Filter
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(Number);
            result = result.filter(item =>
                max ? item.price >= min && item.price <= max : item.price >= min
            );
        }

        // Enrollment Filter
        if (selectedEnrollment !== 'all') {
            const min = parseInt(selectedEnrollment);
            result = result.filter(item => item.totalEnrolment >= min);
        }

        setFilteredClasses(result);
    }, [searchTerm, selectedPrice, selectedEnrollment, classes]);

    return (
        <Main auth={auth}>
            <Head title="All Classes" />
            <div className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 md:px-12">
                {/* Search & Filter Section */}
                <div className="mb-12" data-aos="fade-up">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8">
                        {/* Search Bar */}
                        <div className="mb-6">
                            <div className="relative">
                                <Search className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search courses by name or description..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-700 text-white rounded-xl border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-200"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Filter Controls */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Price Filter */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                                    <Filter className="w-4 h-4" />
                                    Price Range
                                </label>
                                <select
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                >
                                    <option value="all">All Prices</option>
                                    <option value="0-50">$0 - $50</option>
                                    <option value="50-100">$50 - $100</option>
                                    <option value="100-200">$100 - $200</option>
                                    <option value="200">$200+</option>
                                </select>
                            </div>

                            {/* Enrollment Filter */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                                    <Filter className="w-4 h-4" />
                                    Popular Courses
                                </label>
                                <select
                                    value={selectedEnrollment}
                                    onChange={(e) => setSelectedEnrollment(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                >
                                    <option value="all">All Courses</option>
                                    <option value="100">100+ Students</option>
                                    <option value="500">500+ Students</option>
                                    <option value="1000">1000+ Students</option>
                                </select>
                            </div>
                        </div>

                        {/* Active Filters Display */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {searchTerm && (
                                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-xs font-semibold flex items-center gap-2">
                                    Search: {searchTerm}
                                    <button onClick={() => setSearchTerm('')} className="hover:text-blue-300">
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                            {selectedPrice !== 'all' && (
                                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-xs font-semibold flex items-center gap-2">
                                    Price: ${selectedPrice}
                                    <button onClick={() => setSelectedPrice('all')} className="hover:text-blue-300">
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                            {selectedEnrollment !== 'all' && (
                                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-xs font-semibold flex items-center gap-2">
                                    Popular: {selectedEnrollment}+
                                    <button onClick={() => setSelectedEnrollment('all')} className="hover:text-blue-300">
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Results Count */}
                    <p className="text-gray-400 text-sm mt-4">
                        Showing <span className="text-blue-400 font-semibold">{filteredClasses.length}</span> of <span className="text-blue-400 font-semibold">{classes.length}</span> courses
                    </p>
                </div>

                {/* Classes Grid */}
                {filteredClasses.length > 0 ? (
                    <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-12">
                        {filteredClasses.map((item, index) => (
                            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 50}>
                                <Classes item={item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20" data-aos="fade-up">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-white mb-2">No Courses Found</h3>
                        <p className="text-gray-400 text-center max-w-md">
                            Try adjusting your filters or search terms to find what you're looking for.
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedPrice('all');
                                setSelectedEnrollment('all');
                            }}
                            className="mt-6 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </Main>
    );
};

export default Allclasses;