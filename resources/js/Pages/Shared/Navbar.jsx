import React, { useState } from 'react';
import { Menu, X, ChevronDown, LogOut, User, LayoutDashboard } from 'lucide-react';
import { usePage } from '@inertiajs/react';

const Navbar = ({ auth }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { settings } = usePage().props;

    const menu = [
        { label: 'Home', href: '/', route: '/' },
        { label: 'All Class', href: '/allClasses', route: 'all.class' },
        { label: 'Tech on It', href: '/techIt', route: 'tech.it' },
        { label: 'About Us', href: '/aboutUs', route: 'about.us' },
    ];

    const otherLinks = [
        { label: 'FAQ', href: '/faq', route: 'faq' },
        { label: 'Privacy Policy', href: '/privacy-policy', route: 'privecy.policy' },
        { label: 'Terms & Condition', href: '/terms', route: 'terms.condition' },
        { label: 'Contact Us', href: '/contact', route: 'contact.us' },
    ];

    return (
        <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl sticky top-0 z-50">
            <div className="px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <img src="/assets/home/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent hidden sm:block">IT tech</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {menu.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                className="px-4 py-2 text-gray-300 text-sm font-semibold hover:text-white transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-t-lg"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* More Dropdown */}
                        <div className="relative group">
                            <button className="px-4 py-2 text-gray-300 text-sm font-semibold hover:text-white transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-t-lg flex items-center gap-2 group">
                                More
                                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute right-0 mt-0 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3">
                                {otherLinks.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="block px-6 py-2.5 text-gray-300 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 transition-all duration-200 text-sm font-medium"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Auth & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        {auth?.user ? (
                            <div className="relative group hidden md:block">
                                <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors">
                                    <img
                                        src={`${auth?.user?.profilePhoto}` || `${"/assets/user.png"} `}
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full object-cover border-2 border-blue-400"
                                    />
                                    <ChevronDown className="w-4 h-4 text-gray-300 group-hover:rotate-180 transition-transform" />
                                </button>
                                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                    <div className="px-4 py-2 border-b border-slate-700">
                                        <p className="text-white font-semibold text-sm">{auth?.user?.name}</p>
                                    </div>
                                    <a
                                        href={route('profile.edit')}
                                        className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 transition-all"
                                    >
                                        <LayoutDashboard className="w-4 h-4" />
                                        Profile
                                    </a>
                                    <a
                                        href="/dashboard/studentprofile"
                                        className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 transition-all"
                                    >
                                        <LayoutDashboard className="w-4 h-4" />
                                        Dashboard
                                    </a>
                                    <button
                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-red-500 hover:bg-opacity-20 transition-all text-left"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : null}

                        {!auth?.user && (
                            <a href="/login" className="hidden md:block">
                                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                                    LOGIN
                                </button>
                            </a>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-gray-300 hover:text-white transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-slate-800 border-t border-slate-700 py-4">
                        <div className="space-y-2">
                            {menu.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 rounded-lg transition-all"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="border-t border-slate-700 pt-2 mt-2">
                                <p className="px-4 py-1 text-xs text-gray-500 font-semibold uppercase">More</p>
                                {otherLinks.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 rounded-lg transition-all"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        {auth?.user ? (
                            <div className="border-t border-slate-700 mt-4 pt-4 px-4">
                                <p className="text-white font-semibold mb-3">{auth?.user?.name}</p>
                                <a
                                    href="/dashboard/studentprofile"
                                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 rounded-lg transition-all text-sm mb-2"
                                >
                                    Dashboard
                                </a>
                                <button className="w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-red-500 hover:bg-opacity-20 rounded-lg transition-all text-sm text-left">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="border-t border-slate-700 mt-4 pt-4 px-4">
                                <a href="/login" className="block w-full">
                                    <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                                        LOGIN
                                    </button>
                                </a>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;