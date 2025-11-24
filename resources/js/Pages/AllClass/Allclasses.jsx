import { Head, usePage } from "@inertiajs/react";
import Classes from "./Classes";
import { useEffect, useState } from "react";
import Main from "@/Layouts/Main";
import { Search, Filter, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Allclasses = ({ auth, classesData }) => {
    const [classes, setClasses] = useState([]);
    const [filteredClasses, setFilteredClasses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("all");
    const [selectedEnrollment, setSelectedEnrollment] = useState("all");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    // Receiving DB data
    useEffect(() => {
        setClasses(classesData || []);
        setFilteredClasses(classesData || []);
    }, [classesData]);

    // Filter and Search Logic
    useEffect(() => {
        let result = [...classes];

        // Search Filter
        if (searchTerm) {
            result = result.filter((item) => {
                const titleMatch = item.title?.toLowerCase().includes(searchTerm.toLowerCase());
                const descMatch = item.description?.toLowerCase().includes(searchTerm.toLowerCase());
                return titleMatch || descMatch;
            });
        }

        // Price Filter
        if (selectedPrice !== "all") {
            const [min, max] = selectedPrice.split("-").map(Number);
            result = result.filter((item) => {
                if (max) {
                    return item.price >= min && item.price <= max;
                }
                return item.price >= min;
            });
        }

        // Enrollment Filter
        if (selectedEnrollment !== "all") {
            const min = parseInt(selectedEnrollment);
            result = result.filter((item) => Number(item.totalEnrolment) >= min);
        }

        setFilteredClasses(result);
    }, [searchTerm, selectedPrice, selectedEnrollment, classes]);

    return (
        <Main auth={auth}>
            <Head title="All Classes" />

            <div className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 md:px-12">
                {/* Search & Filters */}
                <div data-aos="fade-up" className="mb-12">
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">

                        {/* Search */}
                        <div className="mb-6">
                            <div className="relative">
                                <Search className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-700 text-white rounded-xl border border-slate-600"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm("")}
                                        className="absolute right-4 top-3.5 text-gray-400"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Price */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                                    <Filter className="w-4 h-4" /> Price Range
                                </label>
                                <select
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-700 text-white rounded-lg border border-slate-600"
                                >
                                    <option value="all">All Prices</option>
                                    <option value="0-50">$0 - $50</option>
                                    <option value="50-100">$50 - $100</option>
                                    <option value="100-200">$100 - $200</option>
                                    <option value="200">$200+</option>
                                </select>
                            </div>

                            {/* Enrollment */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                                    <Filter className="w-4 h-4" /> Popular Courses
                                </label>
                                <select
                                    value={selectedEnrollment}
                                    onChange={(e) => setSelectedEnrollment(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-700 text-white rounded-lg border border-slate-600"
                                >
                                    <option value="all">All</option>
                                    <option value="100">100+</option>
                                    <option value="500">500+</option>
                                    <option value="1000">1000+</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm mt-4">
                        Showing <span className="text-blue-400">{filteredClasses.length}</span> of{" "}
                        <span className="text-blue-400">{classes.length}</span> courses
                    </p>
                </div>

                {/* Courses Grid */}
                {filteredClasses.length > 0 ? (
                    <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-12">
                        {filteredClasses.map((item, index) => (
                            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 40}>
                                <Classes item={item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-400">No Courses Found</div>
                )}
            </div>
        </Main>
    );
};

export default Allclasses;
