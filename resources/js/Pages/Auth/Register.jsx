import { Head, Link, useForm } from '@inertiajs/react';
import './login.css'
import { useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        email: '',
        profilePhoto: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };



    return (
        <div className='loginbg bg-fixed'>
            <Head title='Register' />
            <div className="hero min-h-screen py-10 backdrop-blur-sm">
                <div className="hero-content lg:w-1/2 w-11/12">
                    <div className="card shadow-2xl backdrop-blur-xl w-full">
                        <form onSubmit={submit} className="card-body">
                            <h1 className="text-5xl font-bold text-center text-black">Register!</h1>
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    placeholder={'Your Name'}
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            {/* phone */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <TextInput
                                    id="phone"
                                    name="phone"
                                    value={data.phone}
                                    className="mt-1 block w-full"
                                    placeholder={'Your phone'}
                                    autoComplete="phone"
                                    isFocused={true}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    required
                                />
                                <InputError message={errors.phone} className="mt-2" />
                            </div>
                            {/* Photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url*</span>
                                </label>
                                <TextInput
                                    id="profilePhoto"
                                    name="profilePhoto"
                                    value={data.profilePhoto}
                                    className="mt-1 block w-full"
                                    placeholder={'Photo url'}
                                    autoComplete="profilePhoto"
                                    isFocused={true}
                                    onChange={(e) => setData('profilePhoto', e.target.value)}
                                    required
                                />
                                <InputError message={errors.profilePhoto} className="mt-2" />
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    placeholder={'Your email'}
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    placeholder={'Password'}
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            {/* confirm password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    placeholder={'Confirm Password'}
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                            <h2 className=" text-white ml-1">If You have in an account go to <Link href={route('login')}><span className=' text-blue-500 font-bold text-xl'>Log in</span></Link></h2>
                            <div className="flex items-center justify-start mt-2">
                                <PrimaryButton className="ms-4 box butt" disabled={processing}>
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
