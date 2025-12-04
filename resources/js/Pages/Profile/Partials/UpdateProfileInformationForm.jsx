import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Save, User } from 'lucide-react';

const UpdateProfileInformationForm = ({ mustVerifyEmail, status }) => {
    const user = usePage().props.auth.user;
    const { data, setData, patch, processing, errors, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        profile: user.profile || '',
        profilePhoto: null
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            preserveScroll: true,
            onSuccess: () => alert('Profile updated successfully!')
        });
    };

    return (
        <div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <User className="w-6 h-6 text-blue-400" />
                Profile Information
            </h3>
            <p className="text-gray-400 mb-6">Update your personal details and profile information.</p>

            <form onSubmit={submit} className="space-y-6">
                {/* Avatar Upload */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Profile Picture</label>
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-slate-700">
                            {data.name ? data.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <label className="flex items-center justify-center w-full px-4 py-3 bg-slate-700 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-slate-600 transition-all">
                            <input
                                type="file"
                                name="profilePhoto"
                                onChange={(e) => setData('profilePhoto', e.target.files[0])}
                                className="hidden"
                                accept="image/*"
                            />
                            <span className="text-gray-300 font-semibold">Change Avatar</span>
                        </label>
                    </div>
                </div>

                {/* Name Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    {mustVerifyEmail && !data.email_verified_at && (
                        <p className="text-yellow-400 text-sm mt-2">Your email is unverified.</p>
                    )}
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        placeholder="(+880) 1234 567890"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Bio Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Bio</label>
                    <textarea
                        name="profile"
                        value={data.profile}
                        onChange={(e) => setData('profile', e.target.value)}
                        placeholder="Write a short profile about yourself..."
                        rows="4"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500 resize-none"
                    />
                    {errors.profile && <p className="text-red-400 text-sm mt-1">{errors.profile}</p>}
                </div>

                {/* Success Message */}
                {recentlySuccessful && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">Profile updated successfully!</span>
                    </div>
                )}

                {
                    mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="text-sm mt-2 text-gray-800">
                                Your email address is unverified.
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Click here to re-send the verification email.
                                </Link>
                            </p>

                            {status === 'verification-link-sent' && (
                                <div className="mt-2 font-medium text-sm text-green-600">
                                    A new verification link has been sent to your email address.
                                </div>
                            )}
                        </div>
                    )
                }

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <Save className="w-5 h-5" />
                    {processing ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </div>
    );
};
export default UpdateProfileInformationForm;