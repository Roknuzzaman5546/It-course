import NavLink from '@/Components/NavLink'
import Main from '@/Layouts/Main'
import { Head } from '@inertiajs/react'
import React from 'react'
import './Faq.css'
import { FaHouseDamage, FaUserFriends } from 'react-icons/fa'
import { GoLink } from 'react-icons/go'
import { MdOutlineEmail } from 'react-icons/md'

const Faq = ({ auth }) => {
    return (
        <Main auth={auth}>
            <Head title='Faq' />
            {/* faq banner image */}
            <div className="faqbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-full mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink to="/hotel" className="">FAQ</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=' text-3xl font-bold font-rancho text-center my-16'>Frequently asked questions</h2>
            <div className=' md:w-4/5 w-11/12 mx-auto flex md:flex-row flex-col items-center gap-10'>
                {/* image */}
                <div className=' md:w-1/2 w-full mx-auto'>
                    <div className="faqimg-1 rounded-md overflow-hidden">
                        <div className="h-[600px] bg-transparent hover:bg-[#2b2b2bb2] transition-colors duration-500 ease-in-out">
                        </div>
                    </div>
                </div>
                {/* faq quetion */}
                <div className="flex flex-col justify-center mx-auto md:w-1/2 w-full md:pl-5 pl-0">
                    <div className="flex flex-col divide-y space-y-8 divide-gray-400">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer font-rancho text-2xl font-bold">Optio maiores eligendi molestiae totam dolores similique?</summary>
                            <div className="px-4 pb-4">
                                <p className=' font-bold text-gray-500 space-y-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer font-rancho text-2xl font-bold">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                            <div className="px-4 pb-4">
                                <p className=' font-bold text-gray-500 space-y-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer font-rancho text-2xl font-bold">Magni reprehenderit possimus debitis?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p className=' font-bold text-gray-500 space-y-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                <p className=' font-bold text-gray-500 space-y-2 text-xl'>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>

            <div className=' bg-[#f4f3ee]  my-10'>
                <div className=' md:w-11/12 mx-auto w-full flex md:flex-row flex-col justify-center items-center'>
                    <div className=' flex flex-col justify-center items-center gap-2 md:w-[20%] w-full py-10'>
                        <h4 className=' text-2xl font-extrabold text-[#3730A3] font-rancho'>10+</h4>
                        <div className=' bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center'>
                            <MdOutlineEmail className=' text-4xl' />
                        </div>
                        <p className=' text-gray-500'>years</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-2 md:w-[20%] w-full py-10 md:border-l-2 border-l-0 md:border-t-0 border-t-2'>
                        <h4 className=' text-2xl font-extrabold text-[#3730A3] font-rancho'>100+</h4>
                        <div className=' bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center'>
                            <FaUserFriends className=' text-3xl' />
                        </div>
                        <p className=' text-gray-500'>Clints</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-2 md:w-[20%] w-full py-10 md:border-l-2 border-l-0 md:border-t-0 border-t-2'>
                        <h4 className=' text-2xl font-extrabold text-[#3730A3] font-rancho'>50+</h4>
                        <div className=' bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center'>
                            <FaHouseDamage className=' text-3xl' />
                        </div>
                        <p className=' text-gray-500'>Shops</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-2 md:w-[20%] w-full py-10 md:border-l-2 border-l-0 md:border-t-0 border-t-2'>
                        <h4 className=' text-2xl font-extrabold text-[#3730A3] font-rancho'>20M+</h4>
                        <div className=' bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center'>
                            <GoLink className=' text-3xl' />
                        </div>
                        <p className=' text-gray-500'>Shops</p>
                    </div>
                </div>
            </div>
        </Main >
    )
}

export default Faq
