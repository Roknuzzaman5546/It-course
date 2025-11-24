import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Main from "@/Layouts/Main";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import { BookOpen, User, Briefcase, Grid3x3 } from 'lucide-react';

const Title = ({ Subheading, heading }) => (
    <div className="mb-16 mt-8">
        <div className="text-center">
            <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {Subheading}
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {heading}
            </h1>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
            </div>
        </div>
    </div>
);

const Techonitdb = ({ auth }) => {
    const { data, setData, processing, errors, post, reset } = useForm({
        name: undefined,
        title: undefined,
        experience: undefined,
        category: undefined
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('store.teacherReq'), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Application Submitted Successfully!",
                    text: "We will review your application soon.",
                    showConfirmButton: false,
                    timer: 2500,
                    background: '#1e293b',
                    color: '#fff'
                });
                reset();
            },
            onError: (errors) => {
                if (errors) {
                    Swal.fire({
                        title: 'Error!',
                        text: errors.name || errors.title || errors.experience || errors.category || 'Please fill all fields',
                        icon: 'error',
                        confirmButtonText: 'Try Again',
                        background: '#1e293b',
                        color: '#fff'
                    })
                }
            },
        });
    }

    return (
        <Main auth={auth}>
            <Head title="Tech on Site" />
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16">
                <div className="w-11/12 mx-auto mb-20">
                    <Title
                        Subheading="Join Our Teaching Community"
                        heading="Become an Instructor"
                    />

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
                            <form onSubmit={submit} className="space-y-8">
                                {/* Name & Title Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                            <User className="w-4 h-4 text-blue-400" />
                                            Full Name
                                        </label>
                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name || ''}
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />
                                        <InputError message={errors.name} className="mt-2 text-red-400 text-sm" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                            <Briefcase className="w-4 h-4 text-blue-400" />
                                            Professional Title
                                        </label>
                                        <TextInput
                                            id="title"
                                            type="text"
                                            name="title"
                                            value={data.title || ''}
                                            placeholder="e.g. Senior Developer, Designer"
                                            className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                                            autoComplete="title"
                                            onChange={(e) => setData('title', e.target.value)}
                                        />
                                        <InputError message={errors.title} className="mt-2 text-red-400 text-sm" />
                                    </div>
                                </div>

                                {/* Experience & Category Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                            <Briefcase className="w-4 h-4 text-blue-400" />
                                            Experience Level
                                        </label>
                                        <select
                                            value={data.experience || ''}
                                            onChange={(e) => setData('experience', e.target.value)}
                                            className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all cursor-pointer appearance-none"
                                        >
                                            <option value="">Select your experience level</option>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Some idea">Some Idea</option>
                                            <option value="Experienced">Experienced</option>
                                        </select>
                                        <InputError message={errors.experience} className="mt-2 text-red-400 text-sm" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                            <Grid3x3 className="w-4 h-4 text-blue-400" />
                                            Teaching Category
                                        </label>
                                        <select
                                            value={data.category || ''}
                                            onChange={(e) => setData('category', e.target.value)}
                                            className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all cursor-pointer appearance-none"
                                        >
                                            <option value="">Select a category</option>
                                            <option value="Data entry">Data Entry</option>
                                            <option value="Learn basic js">Learn Basic JS</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                            <option value="Digital marketing">Digital Marketing</option>
                                            <option value="Web development">Web Development</option>
                                        </select>
                                        <InputError message={errors.category} className="mt-2 text-red-400 text-sm" />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform"
                                    >
                                        {processing ? 'Submitting...' : 'Submit Application'}
                                    </button>
                                </div>

                                {/* Info Text */}
                                <p className="text-center text-gray-400 text-sm">
                                    We'll review your application and get back to you within 48 hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Techonitdb;