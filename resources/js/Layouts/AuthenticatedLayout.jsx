import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ChevronDown, LogOut, User, Settings } from 'lucide-react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            {/* Navigation */}
            <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 shadow-2xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-xl">IT</span>
                                </div>
                                <span className="text-white font-bold text-lg hidden sm:block">Dashboard</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:flex items-center gap-8">
                            <Link
                                href={route('dashboard')}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                    route().current('dashboard')
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                                }`}
                            >
                                Dashboard
                            </Link>
                        </div>

                        {/* Desktop User Menu */}
                        <div className="hidden sm:flex items-center gap-6">
                            <div className="relative group">
                                <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 text-gray-300 hover:text-white group">
                                    <img
                                        src={user.profile_photo_url || '/assets/user.png'}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full border-2 border-blue-400"
                                    />
                                    <span className="font-semibold">{user.name}</span>
                                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                    <Link
                                        href={route('profile.edit')}
                                        className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 transition-all duration-200"
                                    >
                                        <User className="w-5 h-5" />
                                        <span>Profile</span>
                                    </Link>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="w-full text-left flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-red-500 hover:bg-opacity-20 transition-all duration-200"
                                    >
                                        <LogOut className="w-5 h-5" />
                                        <span>Log Out</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
                            >
                                {showingNavigationDropdown ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {showingNavigationDropdown && (
                    <div className="sm:hidden bg-slate-800 border-t border-slate-700">
                        <div className="px-4 pt-4 pb-3 space-y-2">
                            <Link
                                href={route('dashboard')}
                                className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
                            >
                                Dashboard
                            </Link>
                        </div>

                        <div className="border-t border-slate-700 px-4 py-4">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={user.profile_photo_url || '/assets/user.png'}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full border-2 border-blue-400"
                                />
                                <div>
                                    <p className="text-white font-semibold">{user.name}</p>
                                    <p className="text-gray-400 text-sm">{user.email}</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Link
                                    href={route('profile.edit')}
                                    className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-300"
                                >
                                    <User className="w-5 h-5" />
                                    Profile
                                </Link>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="w-full text-left flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-red-500 hover:bg-opacity-20 rounded-lg transition-all duration-300"
                                >
                                    <LogOut className="w-5 h-5" />
                                    Log Out
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Header */}
            {header && (
                <header className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 shadow-xl">
                    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            {header}
                        </h2>
                    </div>
                </header>
            )}

            {/* Main Content */}
            <main className="py-12">
                {children}
            </main>
        </div>
    );
}