import { Head } from '@inertiajs/react'
import React from 'react'

const Faq = ({ auth }) => {
    return (
        <Main auth={auth}>
            <Head title='Faq' />
            {/* faq banner image */}
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
        </Main>
    )
}

export default Faq
