import Main from '@/Layouts/Main';
import { Head, Link } from '@inertiajs/react';
import React from 'react';
import './About.css'
import NavLink from '@/Components/NavLink';
import { MdOutlineEmail } from "react-icons/md";

const AboutUs = ({ auth }) => {
    return (
        <Main auth={auth}>
            <Head title='About-us'></Head>
            {/* About us banner */}
            <div className="aboutbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-full mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink to="/hotel" className="">About us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-4/5 mx-auto'>
                {/* About us header section */}
                <h2 className=' text-3xl font-bold font-rancho text-center my-16'>About us</h2>
                {/* Our comany section */}
                <div className=' flex justify-center items-center gap-1'>
                    <img className=' w-1/2 h-[500px] rounded-lg' src={'/assets/about/about-1.jpg'} alt="" />
                    <div className=' w-1/2 text-left pl-8'>
                        <h2 className=' text-2xl font-bold font-rancho text-left'>Our Company</h2>
                        <p className=' space-y-2 text-gray-600 font-rancho mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque culpa a, laudantium autem, in totam vel doloremque nobis repudiandae asperiores dolores corporis alias iure cupiditate. Blanditiis voluptatum autem amet! </p>
                    </div>
                </div>
                {/* Our mission */}
                <div className=' flex justify-center items-center gap-0'>
                    <div className=' w-1/2 text-left pr-8'>
                        <h2 className=' text-2xl font-bold font-rancho text-left'>Our Company</h2>
                        <p className=' space-y-2 text-gray-600 font-rancho mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque culpa a, laudantium autem, in totam vel doloremque nobis repudiandae asperiores dolores corporis alias iure cupiditate. Blanditiis voluptatum autem amet! </p>
                    </div>
                    <img className=' w-1/2 h-[500px] rounded-lg' src={'/assets/about/about-2.jpg'} alt="" />
                </div>
                {/* Our vision */}
                <div className=' flex justify-center items-center gap-0'>
                    <img className=' w-1/2 h-[500px] rounded-lg' src={'/assets/about/about-3.jpg'} alt="" />
                    <div className=' w-1/2 text-left pl-8'>
                        <h2 className=' text-2xl font-bold font-rancho text-left'>Our vision</h2>
                        <p className=' space-y-2 text-gray-600 font-rancho mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque culpa a, laudantium autem, in totam vel doloremque nobis repudiandae asperiores dolores corporis alias iure cupiditate. Blanditiis voluptatum autem amet! </p>
                    </div>
                </div>
                {/* count section */}
            </div>
            <div className=' bg-[#f4f3ee] py-24 my-10'>
                <div className=' w-11/12'>
                    <div>
                        <h4>10+</h4>
                        <div>
                            <MdOutlineEmail />
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </Main>
    );
};

export default AboutUs;
