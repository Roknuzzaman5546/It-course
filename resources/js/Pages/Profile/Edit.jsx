import React, { useEffect } from 'react';
import { Head} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';


// Main Profile Edit Component
export default function Edit({ auth, mustVerifyEmail, status }) {
    useEffect(() => {
        AOS.init({ duration: 800, offset: 150 });
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Title Section */}
                <div data-aos="fade-up" className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Profile Settings
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Manage your account settings and preferences
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Forms Grid */}
                <div className="grid grid-cols-1 gap-8 mb-12">
                    {/* Update Profile Information */}
                    <div
                        data-aos="fade-up"
                        className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
                    >
                        <UpdateProfileInformationForm
                            user={auth.user}
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>

                    {/* Update Password */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
                    >
                        <UpdatePasswordForm />
                    </div>

                    {/* Delete Account */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-700/30 rounded-2xl p-8 shadow-2xl hover:border-red-500 hover:shadow-2xl transition-all duration-300"
                    >
                        <DeleteUserForm />
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="bg-gradient-to-br from-blue-500/10 to-slate-900 border border-blue-500/30 rounded-2xl p-6"
                    >
                        <h3 className="text-lg font-bold text-blue-400 mb-2">📧 Email Verification</h3>
                        <p className="text-gray-400">Keep your email updated to receive important notifications and security alerts.</p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="bg-gradient-to-br from-green-500/10 to-slate-900 border border-green-500/30 rounded-2xl p-6"
                    >
                        <h3 className="text-lg font-bold text-green-400 mb-2">🔐 Security Tips</h3>
                        <p className="text-gray-400">Use a strong password with uppercase, lowercase, numbers, and special characters.</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}