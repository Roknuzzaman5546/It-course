import NavLink from '@/Components/NavLink'
import Main from '@/Layouts/Main'
import { Head } from '@inertiajs/react'
import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <Main>
            <Head title='Contact' />
            {/* contact banner image */}
            <div className="contactbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-full mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">
                            <NavLink href={route('/')} active={route().current('/')} className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink href={route('contact.us')} active={route().current('contact.us')} className="">Contact us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div>ContactUs</div>
        </Main>
    )
}

export default ContactUs
