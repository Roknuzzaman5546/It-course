import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Main from "@/Layouts/Main";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import { BookOpen, User, Briefcase, BookText, Captions } from 'lucide-react';

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


const Techonitdb = ({ auth, teacherRequest }) => {

    // form setup
    const { data, setData, processing, errors, post, reset } = useForm({
        name: auth.user?.name || '',
        title: '',
        cv_url: '',
        bio: ''
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
            }
        });
    };

    return (
        <Main auth={auth}>
            <Head title="Instructor Application" />

            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16">
                <div className="w-11/12 mx-auto my-20">
                    <Title
                        Subheading="Join Our Teaching Community"
                        heading="Become an Instructor"
                    />

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
                            {teacherRequest ? (
                                <div className="text-center text-white">
                                    {/* Pending */}
                                    {teacherRequest.status === "pending" && (
                                        <>
                                            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                                                Your application is under review
                                            </h2>
                                            <p className="text-gray-300 mb-4">
                                                You applied on: {teacherRequest.created_at.split("T")[0]}
                                            </p>
                                            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                                                Status: Pending
                                            </span>
                                        </>
                                    )}

                                    {/* Rejected */}
                                    {teacherRequest.status === "rejected" && (
                                        <>
                                            <h2 className="text-2xl font-bold text-red-400 mb-4">
                                                Your Request Was Rejected
                                            </h2>

                                            <p className="text-gray-300 mb-4">
                                                Reason: {teacherRequest.reason || "Not specified"}
                                            </p>

                                            <button
                                                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition"
                                                onClick={() => window.location.href = route("apply.teacher")}
                                            >
                                                Request Again
                                            </button>
                                        </>
                                    )}

                                    {/* Approved */}
                                    {teacherRequest.status === "approved" && (
                                        <>
                                            <h2 className="text-2xl font-bold text-green-400 mb-4">
                                                Congratulations! You are now an Instructor 🎉
                                            </h2>

                                            <p className="text-gray-300 mb-4">
                                                You can now add your own classes.
                                            </p>

                                            <button
                                                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition"
                                                onClick={() => window.location.href = route("teacher.addClass")}
                                            >
                                                Add Your First Class
                                            </button>
                                        </>
                                    )}

                                </div>
                            ) : (
                                <form onSubmit={submit} className="space-y-8 text-white">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                                <User className="w-4 h-4 text-blue-400" />
                                                Full Name
                                            </label>
                                            <TextInput
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg"
                                                onChange={(e) => setData("name", e.target.value)}
                                            />
                                            <InputError message={errors.name} className="mt-2" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                                <Captions className="w-4 h-4 text-blue-400" />
                                                Professional Title
                                            </label>
                                            <TextInput
                                                id="title"
                                                type="text"
                                                value={data.title}
                                                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg"
                                                onChange={(e) => setData("title", e.target.value)}
                                            />
                                            <InputError message={errors.title} className="mt-2" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                                <BookText className="w-4 h-4 text-blue-400" />
                                                CV URL *
                                            </label>
                                            <TextInput
                                                id="cv_url"
                                                type="text"
                                                value={data.cv_url}
                                                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg"
                                                onChange={(e) => setData("cv_url", e.target.value)}
                                            />
                                            <InputError message={errors.cv_url} className="mt-2" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-blue-400" />
                                                Bio
                                            </label>
                                            <TextInput
                                                id="bio"
                                                type="text"
                                                value={data.bio}
                                                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg"
                                                onChange={(e) => setData("bio", e.target.value)}
                                            />
                                            <InputError message={errors.bio} className="mt-2" />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition"
                                    >
                                        {processing ? "Submitting..." : "Submit Application"}
                                    </button>
                                </form>
                            )}

                        </div>
                    </div>
                </div>
            </div>

        </Main>
    );
};

export default Techonitdb;
