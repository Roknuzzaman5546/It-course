
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Main from "@/Layouts/Main";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import Title from "../Shared/Title";


const Techonitdb = ({ auth }) => {
    const { data, setData, processing, errors, reset } = useForm({
        name: undefined,
        title: undefined,
        experience: undefined,
        phone: undefined,
        category: undefined
    });

    const submit = async (data) => {
        console.log(data)
        const applyform = {
            name: data.name,
            image: user?.photoURL,
            experience: data.experience,
            title: data.title,
            status: 'pending',
            email: user?.email,
            category: data.category
        }
        console.log(applyform)
        axiospublic.post('/teacherreq', applyform)
            .then(res => {
                console.log(res.data)
                Swal.fire("Request has been submited!");
                reset();
            })
    }

    return (
        <Main auth={auth}>
            <Head title="Tech">
            </Head>
            <div className="w-11/12 mx-auto mb-20 mt-4">
                <div>
                    <Title
                        Subheading={"If you tech our site then fil up the form"}
                        heading={'Feel up the form'}
                    ></Title>
                </div>
                <div className=" px-5 rounded-md">
                    <form onSubmit={submit}>
                        <div className=' w-[80%] p-10 mx-auto bg-[#f3f1f6] rounded-md mt-2 mb-5'>
                            {/* name & title */}
                            <div className=' flex items-center gap-1'>
                                <div className=' w-1/2'>
                                    <InputLabel htmlFor="name" value="Name*" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder={'Class Name'}
                                        className="mt-1 block w-full p-2 text-black bg-gray-100"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className=' my-2 w-1/2'>
                                    <InputLabel htmlFor="title" value="Title*" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        placeholder={'Your title'}
                                        className="mt-1 block w-full p-2 text-black bg-gray-100"
                                        autoComplete="title"
                                        isFocused={true}
                                        onChange={(e) => setData('title', e.target.value)}
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>
                            </div>
                            {/* Experience & category */}
                            <div className=' flex items-center gap-1'>
                                <div className='my-2 w-1/2'>
                                    <InputLabel htmlFor="experience" value="Experience" />
                                    <select
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full mt-1 text-black bg-gray-100"
                                        onChange={(e) => setData('experience', e.target.value)}
                                    >
                                        <option disabled selected>Select Experience</option>
                                        <option value={data.experience}>Beginner</option>
                                        <option value={data.experience}>Some idea</option>
                                        <option value={data.experience}>Experienced</option>
                                    </select>
                                </div>
                                <div className='my-2 w-1/2'>
                                    <InputLabel htmlFor="category" value="Category" />
                                    <select
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full mt-1 text-black bg-gray-100"
                                        onChange={(e) => setData('category', e.target.value)}
                                    >
                                        <option disabled selected>Select category</option>
                                        <option value={data.category}>Data entry</option>
                                        <option value={data.category}>Learn basic js</option>
                                        <option value={data.category}>Graphic Design</option>
                                        <option value={data.category}>Digital marketing</option>
                                        <option value={data.category}>Web development</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" mt-3">
                                <button className=" mx-auto box butt" disabled={processing}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Main>
    );
};

export default Techonitdb;
