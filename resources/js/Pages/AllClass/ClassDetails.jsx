import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Award, CheckCircle, ShoppingCart, ArrowLeft, Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';

// ClassDetails Component
const ClassDetails = ({ classData, auth }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, offset: 150 });
    }, []);

    if (!classData) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
                <div className="text-white text-2xl">Loading...</div>
            </div>
        );
    }

    if (showCheckout) {
        return <CheckoutPage classData={classData} auth={auth} onBack={() => setShowCheckout(false)} />;
    }

    const courseFeatures = [
        { icon: Clock, label: 'Duration', value: classData.duration || 'Self-paced' },
        { icon: Award, label: 'Level', value: classData.level || 'Beginner' },
        { icon: Users, label: 'Students', value: `${classData.totalEnrolment || 0}+ enrolled` },
        { icon: CheckCircle, label: 'Certificate', value: 'Available' }
    ];

    const courseCurriculum = [
        { section: 'Introduction', lectures: 5, duration: '45m' },
        { section: 'Core Concepts', lectures: 12, duration: '3h 30m' },
        { section: 'Practical Projects', lectures: 8, duration: '2h 15m' },
        { section: 'Advanced Topics', lectures: 10, duration: '2h 50m' }
    ];

    return (
        <Main auth={auth}>
            <Head title="Details" />
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                {/* Hero Section */}
                <div className="py-20 relative h-[450px] bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-50">
                        <img src={classData.thumbnail} alt={classData.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10 w-11/12 mx-auto flex items-center justify-between">
                        <div className="max-w-2xl" data-aos="fade-right">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-semibold">
                                    {classData.level || 'Beginner'} Course
                                </span>
                            </div>
                            <h1 className="text-5xl font-bold text-white mb-4">{classData.title}</h1>
                            <p className="text-gray-300 text-lg mb-6">{classData.description}</p>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                    </div>
                                    <span className="text-white font-semibold">(2,543 reviews)</span>
                                </div>
                                <span className="text-gray-300">{classData.totalEnrolment || 0}+ students</span>
                            </div>
                        </div>

                        {/* Price Card */}
                        <div data-aos="fade-left" className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 w-80 shadow-2xl">
                            <div className="text-center mb-6">
                                <p className="text-gray-400 text-sm mb-2">Course Price</p>
                                <h2 className="text-5xl font-bold text-white">
                                    {classData.price || 0}
                                    <span className="text-2xl text-gray-400 ml-2">{classData.currency || 'BDT'}</span>
                                </h2>
                            </div>

                            <button
                                onClick={() => setShowCheckout(true)}
                                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Enroll Now
                            </button>

                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className="w-full py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                                {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                            </button>

                            <div className="mt-6 space-y-3 text-sm">
                                <p className="text-gray-400">✓ 30-day money back guarantee</p>
                                <p className="text-gray-400">✓ Full lifetime access</p>
                                <p className="text-gray-400">✓ Certificate of completion</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="w-11/12 mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        {courseFeatures.map((feature, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-2">{feature.label}</p>
                                <h3 className="text-white font-semibold text-lg">{feature.value}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Curriculum Section */}
                    <div data-aos="fade-up" className="mb-20">
                        <h2 className="text-4xl font-bold text-white mb-12">Course Curriculum</h2>
                        <div className="space-y-4">
                            {courseCurriculum.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-lg">{item.section}</h3>
                                                <p className="text-gray-400 text-sm">{item.lectures} lectures</p>
                                            </div>
                                        </div>
                                        <span className="text-blue-400 font-semibold">{item.duration}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description Section */}
                    <div data-aos="fade-up" className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 mb-20">
                        <h2 className="text-3xl font-bold text-white mb-6">About This Course</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            {classData.description || 'This comprehensive course is designed to teach you everything you need to know to master this subject.'}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Learn from industry experts',
                                'Real-world projects and assignments',
                                'Interactive coding challenges',
                                'Lifetime access to course materials',
                                'Community support and discussions',
                                'Certificate upon completion'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Main>
    );
};

// Checkout Component
const CheckoutPage = ({ classData, auth, onBack }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: 'Bangladesh',
        paymentMethod: 'card'
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            alert('Payment processed! Thank you for your enrollment.');
            setIsProcessing(false);
            onBack();
        }, 2000);
    };

    const formFields = [
        { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe', col: 'full' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', col: 'half' },
        { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+880 1234567890', col: 'half' },
        { name: 'address', label: 'Address', type: 'text', placeholder: '123 Main Street', col: 'full' },
        { name: 'city', label: 'City', type: 'text', placeholder: 'Dhaka', col: 'half' },
        { name: 'country', label: 'Country', type: 'text', col: 'half' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12">
            <Head title="Pay out" />
            <div className="w-11/12 mx-auto">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Course
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-white mb-8">Checkout</h2>

                            <div onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Information */}
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-300 text-sm font-semibold mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                                                    placeholder="+880 1234567890"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Billing Address */}
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Billing Address</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-300 text-sm font-semibold mb-2">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                                                placeholder="123 Main Street"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-300 text-sm font-semibold mb-2">City</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                                                    placeholder="Dhaka"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-300 text-sm font-semibold mb-2">Country</label>
                                                <input
                                                    type="text"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Payment Method</h3>
                                    <div className="space-y-3">
                                        {['card', 'bkash', 'nagad'].map(method => (
                                            <label key={method} className="flex items-center p-4 bg-slate-700 border border-slate-600 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value={method}
                                                    checked={formData.paymentMethod === method}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4"
                                                />
                                                <span className="ml-3 text-white font-semibold capitalize">{method === 'bkash' ? 'bKash' : method === 'nagad' ? 'Nagad' : 'Credit/Debit Card'}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isProcessing}
                                    className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? 'Processing...' : `Complete Purchase - ${classData.price} ${classData.currency}`}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 sticky top-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

                            <div className="mb-6">
                                <img src={classData.thumbnail} alt={classData.title} className="w-full h-40 rounded-lg object-cover mb-4" />
                                <h3 className="text-white font-semibold text-lg">{classData.title}</h3>
                                <p className="text-gray-400 text-sm mt-2">by {classData.teacher_name || 'Expert Instructor'}</p>
                            </div>

                            <div className="space-y-3 py-6 border-y border-slate-700">
                                <div className="flex justify-between text-gray-300">
                                    <span>Course Price</span>
                                    <span className="text-white font-semibold">{classData.price} {classData.currency}</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Discount</span>
                                    <span className="text-green-400 font-semibold">-0 {classData.currency}</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Tax</span>
                                    <span className="text-white font-semibold">0 {classData.currency}</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-700">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-white font-semibold text-lg">Total</span>
                                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                        {classData.price}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-xs text-center">
                                    ✓ Secure Payment | ✓ Money-back Guarantee | ✓ Lifetime Access
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;