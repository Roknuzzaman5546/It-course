import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-4 py-2 font-semibold text-sm transition-all duration-300 ease-in-out focus:outline-none rounded-lg relative group ' +
                (active
                    ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-400 bg-opacity-10'
                    : 'text-gray-300 border-b-2 border-transparent hover:text-white hover:bg-blue-400 hover:bg-opacity-10 hover:border-blue-400 focus:text-blue-400 focus:border-blue-400 ') +
                className
            }
        >
            {children}
            <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300 ${
                    active ? 'w-full' : ''
                }`}
            />
        </Link>
    );
}