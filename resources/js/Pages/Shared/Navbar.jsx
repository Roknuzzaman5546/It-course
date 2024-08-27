import { useContext, useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Navbar = ({auth}) => {
    // console.log(auth)
    const handleLogout = () => {
        userLogout()
            .then(() => {
            })
            .catch(error => {
                console.log(error)
            })
    }

    const menu =
        <>
            <li><NavLink href={route('/')} active={route().current('/')}>
                Home
            </NavLink></li>
            <li><NavLink href={route('all.class')} active={route().current('all.class')}>
                All Class
            </NavLink></li>
            <li><NavLink href={route('tech.it')} active={route().current('tech.it')}>
                Tech on It tech
            </NavLink></li>
            <li><NavLink href={route('about.us')} active={route().current('about.us')}>
                About us
            </NavLink></li>
        </>

    return (
        <div>
            <div className="navbar px-5 bg-gray-800 text-xl font-bold italic text-white p-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className=" flex items-center justify-between" href={route('/')}>
                        <img className=" w-10 rounded-full" src={"/assets/home/logo.png"} alt="" />
                        <a className=" btn btn-ghost font-serif text-xl">IT tech</a>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                        </ul>
                    </div>
                    {auth?.user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={auth?.user?.profile_image ?? "/assets/user.png"} className='w-5 h-5 md:w-7 md:h-7 rounded-full' alt="user avater" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-5 shadow bg-gray-800 rounded-box w-52">
                            <li>
                                <a>
                                    <h2 className=" uppercase">{auth?.user.name}</h2>
                                </a>
                            </li>
                            <li><Link to="/dashbord/studentprofile">Dashbord</Link></li>
                            <li><Link onClick={handleLogout}>Logout</Link></li>
                        </ul>
                    </div> : <Link to="/login"><button className="btn">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
