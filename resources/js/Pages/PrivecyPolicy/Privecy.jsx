import NavLink from '@/Components/NavLink'
import Main from '@/Layouts/Main'
import { Head } from '@inertiajs/react'
import React from 'react'
import './Privecy.css'

const Privecy = ({ auth }) => {
    return (
        <Main auth={auth}>
            <Head title='Privecy' />
            {/* Privecy banner image */}
            <div className="privecybgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-full mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">

                            <NavLink href={route('/')} active={route().current('/')} className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink href={route('privecy.policy')} active={route().current('privecy.policy')} className="">Privecy policy</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className=' text-4xl font-bold font-rancho text-center my-20'>Privacy policy</h2>

            {/* privecy policy */}
            <div>
                <div>
                    
                </div>
                <div>
                    <img src={'/assets/privecy-policy/privecy-policy.JPG'} alt="" />
                </div>
            </div>
        </Main>
    )
}

export default Privecy
