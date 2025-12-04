import { useForm } from '@inertiajs/react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { useState } from 'react';

const UpdatePasswordForm = () => {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const { data, setData, post, processing, errors, recentlySuccessful, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-400" />
                Update Password
            </h3>
            <p className="text-gray-400 mb-6">Ensure your account is using a long, random password to stay secure.</p>

            <form onSubmit={submit} className="space-y-6">
                {/* Current Password */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Current Password</label>
                    <div className="relative">
                        <input
                            type={showPassword.current ? 'text' : 'password'}
                            name="current_password"
                            value={data.current_password}
                            onChange={handleInputChange}
                            placeholder="Enter current password"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500 pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('current')}
                            className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-200"
                        >
                            {showPassword.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.current_password && <p className="text-red-400 text-sm mt-1">{errors.current_password}</p>}
                </div>

                {/* New Password */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">New Password</label>
                    <div className="relative">
                        <input
                            type={showPassword.new ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            onChange={handleInputChange}
                            placeholder="Enter new password"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500 pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('new')}
                            className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-200"
                        >
                            {showPassword.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Confirm Password</label>
                    <div className="relative">
                        <input
                            type={showPassword.confirm ? 'text' : 'password'}
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={handleInputChange}
                            placeholder="Confirm password"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all placeholder-gray-500 pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('confirm')}
                            className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-200"
                        >
                            {showPassword.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.password_confirmation && <p className="text-red-400 text-sm mt-1">{errors.password_confirmation}</p>}
                </div>

                {/* Success Message */}
                {recentlySuccessful && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">Password updated successfully!</span>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <Lock className="w-5 h-5" />
                    {processing ? 'Updating...' : 'Update Password'}
                </button>
            </form>
        </div>
    );
};
export default UpdatePasswordForm;

