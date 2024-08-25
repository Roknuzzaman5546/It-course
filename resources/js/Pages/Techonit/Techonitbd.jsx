import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Main from "@/Layouts/Main";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import Title from "../Shared/Title";


const Techonitdb = ({auth}) => {
    const { data, setData, processing, errors, reset } = useForm({
        name: undefined,
        class_id: undefined,
        email: undefined,
        phone: undefined,
        roll: undefined
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
            <div className="w-11/12 mx-auto my-10">
                <div>
                    <Title
                        Subheading={"If you tech our site then fil up the form"}
                        heading={'Feel up the form'}
                    ></Title>
                </div>
                <div className=" bg-blue-300 px-5 py-8 space-y-2 rounded-md">
                    {/* <form onSubmit={onSubmit}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("name", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className=" flex md:flex-row flex-col items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Experience*</span>
                            </label>
                            <select {...register("experience", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled defaultValue={"Please select"}>Please select</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Experienced">Experienced</option>
                                <option value="Some idea">Some idea</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" {...register("title", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })}
                            className="select select-bordered w-full">
                            <option disabled defaultValue={"Please select"}>Please select</option>
                            <option value="webdevlopment">Web devlopment</option>
                            <option value="digitalmarketing">Digital marketing</option>
                            <option value="graphicdesign">Graphic Design</option>
                            <option value="lernbasic">Leron basic js</option>
                            <option value="data entry">Data entry</option>
                        </select>
                    </div>
                    <br />
                    <button className="btn mt-3 font-bold">
                        Submit for review
                    </button>
                </form> */}
                    <form onSubmit={submit}>
                        <div className=' w-[80%] p-10 mx-auto bg-white rounded-md mt-5 mb-5'>
                            <div className=' flex items-center gap-1'>
                                <div className=' w-1/2'>
                                    <InputLabel htmlFor="name" value="Name" />
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
                            </div>
                            <div className=' flex items-center gap-1'>
                                <div className=' my-2 w-1/2'>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        placeholder={'Your email'}
                                        className="mt-1 block w-full p-2 text-black bg-gray-100"
                                        autoComplete="email"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className=' my-2 w-1/2'>
                                    <InputLabel htmlFor="roll" value="Roll" />
                                    <TextInput
                                        id="roll"
                                        type="text"
                                        name="roll"
                                        value={data.roll}
                                        placeholder={'Your roll'}
                                        className="mt-1 block w-full p-2 text-black bg-gray-100"
                                        autoComplete="roll"
                                        isFocused={true}
                                        onChange={(e) => setData('roll', e.target.value)}
                                    />
                                    <InputError message={errors.roll} className="mt-2" />
                                </div>
                            </div>
                            <div className=' my-2'>
                                <InputLabel htmlFor="phone" value="Phone" />
                                <TextInput
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    placeholder={'Your phone'}
                                    className="mt-1 block w-full p-2 text-black bg-gray-100"
                                    autoComplete="phone"
                                    isFocused={true}
                                    onChange={(e) => setData('phone', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <PrimaryButton className="mt-4 mx-auto" disabled={processing}>
                                    Add
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Main>
    );
};

export default Techonitdb;
