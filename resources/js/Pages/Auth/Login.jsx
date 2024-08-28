import Checkbox from '@/Components/Checkbox';
import './login.css'
import { Link, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useEffect } from 'react';


const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (
        <div className='loginbg bg-fixed'>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="hero min-h-screen py-10 backdrop-blur-sm">
                <div className="hero-content flex-col lg:flex-row gap-3">
                    <div className=' w-4/6 shadow-2xl backdrop-blur-sm py-10 rounded-lg'>
                        <h2 className=' text-black text-5xl font-serif font-bold'>It <span className=' text-white'>tech </span>Online learning</h2>
                        <p className=' text-black'>Please log in our site</p>
                    </div>
                    <div className="card shadow-2xl backdrop-blur-xl lg:w-1/2 w-full">
                        <form onSubmit={submit} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <span className="ms-2 text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}

                                <PrimaryButton className="ms-4 box butt" disabled={processing}>
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                        <div>
                            <button className='btn w-9/12 font-bold'><img className=' w-5 h-5' src={'/assets/google.png'} alt="" /> <p>Google</p></button>
                        </div>
                        <h2 className=' text-white'>If you new in our resturent go to <Link href={route('register')}><span className=' text-blue-700 font-bold text-xl'>Register</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
