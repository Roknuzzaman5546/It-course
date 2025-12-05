import { Link, useForm, usePage } from '@inertiajs/react';
import { CheckCircle, Save, Upload, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;
    const [previewImage, setPreviewImage] = useState(null);

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        profile: user.profile || '',
        profilePhoto: null,
    });

    // Show user's existing profile photo on component load
    useEffect(() => {
        if (user.profilePhoto) {
            setPreviewImage(user.profilePhoto);
        }
    }, [user]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('profilePhoto', file);
            
            // Create preview URL for the new image
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setData('profilePhoto', null);
        if (!user.profilePhoto) {
            setPreviewImage(null);
        } else {
            setPreviewImage(user.profilePhoto);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('profile.update'), {
            forceFormData: true,
        });
    };

    return (
        <section className={className}>
            <header className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <span className="text-blue-400">👤</span>
                    Profile Information
                </h2>
                <p className="text-gray-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="space-y-6">
                {/* Avatar Upload */}
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                    <label className="block text-sm font-semibold text-gray-300 mb-4">Profile Picture</label>
                    <div className="flex items-center gap-6">
                        {/* Preview Circle */}
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg border-4 border-blue-400 overflow-hidden flex-shrink-0">
                                {previewImage ? (
                                    <img 
                                        src={`/uploads/${previewImage}`} 
                                        alt="Preview" 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span>{data.name ? data.name.charAt(0).toUpperCase() : 'U'}</span>
                                )}
                            </div>
                            
                            {/* Remove Image Button */}
                            {previewImage && data.profilePhoto && (
                                <button
                                    type="button"
                                    onClick={removeImage}
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors shadow-lg"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Upload Area */}
                        <div className="flex-1">
                            <label className="flex flex-col items-center justify-center w-full px-6 py-8 bg-slate-800 border-2 border-dashed border-slate-600 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-slate-700 transition-all duration-300 group">
                                <input
                                    type="file"
                                    name="profilePhoto"
                                    onChange={handleFileChange}
                                    className='hidden'
                                    accept="image/*"
                                />
                                <div className="text-center">
                                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-blue-400 transition-colors" />
                                    <p className="text-gray-300 font-semibold group-hover:text-blue-400 transition-colors">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </label>
                            {errors.profilePhoto && (
                                <p className="text-red-400 text-sm mt-2">{errors.profilePhoto}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name
                    </label>
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
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address
                    </label>
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
                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div className="mt-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                            <p className="text-yellow-400 text-sm">
                                Your email is unverified.
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="ml-2 underline hover:no-underline text-yellow-300 font-semibold"
                                >
                                    Click here to verify
                                </Link>
                            </p>
                            {status === 'verification-link-sent' && (
                                <p className="text-green-400 text-sm mt-2">
                                    ✓ Verification link sent to your email!
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Phone Field */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        placeholder="(+880) 1234 567890"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Bio/Profile Field */}
                <div>
                    <label htmlFor="profile" className="block text-sm font-semibold text-gray-300 mb-2">
                        Bio
                    </label>
                    <textarea
                        name="profile"
                        id="profile"
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
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-pulse">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-green-400 font-semibold">✓ Profile updated successfully!</span>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                    <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {processing ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </section>
    );
}