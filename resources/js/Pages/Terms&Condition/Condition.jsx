import Main from '@/Layouts/Main'
import { Head } from '@inertiajs/react'
import React from 'react'
import './Condition.css'
import NavLink from '@/Components/NavLink'

const Condition = ({ auth }) => {
    return (
        <Main auth={auth}>
            <Head title='Condition' />
            {/* faq banner image */}
            <div className="conditionbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-full mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">
                            <NavLink href={route('/')} active={route().current('/')} className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink href={route('terms.condition')} active={route().current('terms.condition')} className="">Terms & Condition</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=' text-4xl font-bold font-rancho text-center my-20'>Terms & conditions</h2>
            <div className=' max-w-2xl'>
                <img src={'assets/condition/condition.jpg'} alt="" />
            </div>
        </Main>
    )
}

export default Condition
