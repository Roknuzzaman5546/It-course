import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' }
    ];

    const services = [
        { name: 'Web Development', href: '#' },
        { name: 'Course Design', href: '#' },
        { name: 'Tech Training', href: '#' },
        { name: 'Consulting', href: '#' }
    ];

    const company = [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' }
    ];

    const legal = [
        { name: 'Terms of Use', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Disclaimer', href: '#' }
    ];

    return (
        <div className='bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800'>
            <div className='w-11/12 mx-auto py-16'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-5 gap-12 mb-12'>
                    {/* Brand Section */}
                    <div className='col-span-1 space-y-4'>
                        <div className='flex items-center gap-3'>
                            <div className='w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg'>
                                <img className='w-10 h-10 rounded' src={"/assets/home/logo.png"} alt="Logo" />
                            </div>
                            <div>
                                <h3 className='text-white font-bold text-lg'>IT Tech</h3>
                                <p className='text-gray-400 text-xs'>Since 1992</p>
                            </div>
                        </div>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            Providing reliable technology education and training solutions for over three decades.
                        </p>
                        {/* Social Links */}
                        <div className='flex gap-3 pt-2'>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className='w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group'
                                    title={social.label}
                                >
                                    <social.icon className='w-5 h-5 group-hover:scale-110 transition-transform' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className='text-white font-bold text-lg mb-6 flex items-center gap-2'>
                            <div className='w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded'></div>
                            Services
                        </h4>
                        <nav className='space-y-3'>
                            {services.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className='text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group'
                                >
                                    <span className='w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className='text-white font-bold text-lg mb-6 flex items-center gap-2'>
                            <div className='w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded'></div>
                            Company
                        </h4>
                        <nav className='space-y-3'>
                            {company.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className='text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group'
                                >
                                    <span className='w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className='text-white font-bold text-lg mb-6 flex items-center gap-2'>
                            <div className='w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded'></div>
                            Legal
                        </h4>
                        <nav className='space-y-3'>
                            {legal.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className='text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group'
                                >
                                    <span className='w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className='text-white font-bold text-lg mb-6 flex items-center gap-2'>
                            <div className='w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded'></div>
                            Newsletter
                        </h4>
                        <p className='text-gray-400 text-sm mb-4'>
                            Subscribe for updates and exclusive offers.
                        </p>
                        <div className='flex'>
                            <input
                                type='email'
                                placeholder='Your email'
                                className='flex-1 px-4 py-2 bg-slate-800 text-white text-sm rounded-l-lg border border-slate-700 focus:outline-none focus:border-blue-500 transition-colors'
                            />
                            <button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all rounded-r-lg'>
                                <ArrowRight className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-slate-800'>
                    <div className='flex items-start gap-4 p-4 rounded-lg bg-slate-800 bg-opacity-50 hover:bg-opacity-100 transition-all'>
                        <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0'>
                            <Mail className='w-6 h-6 text-white' />
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs mb-1'>Email Us</p>
                            <a href='mailto:info@ittech.com' className='text-white font-semibold hover:text-blue-400 transition-colors'>
                                info@ittech.com
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start gap-4 p-4 rounded-lg bg-slate-800 bg-opacity-50 hover:bg-opacity-100 transition-all'>
                        <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0'>
                            <Phone className='w-6 h-6 text-white' />
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs mb-1'>Call Us</p>
                            <a href='tel:+88012345678' className='text-white font-semibold hover:text-blue-400 transition-colors'>
                                +880 1234 5678
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start gap-4 p-4 rounded-lg bg-slate-800 bg-opacity-50 hover:bg-opacity-100 transition-all'>
                        <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0'>
                            <MapPin className='w-6 h-6 text-white' />
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs mb-1'>Location</p>
                            <a href='#' className='text-white font-semibold hover:text-blue-400 transition-colors'>
                                Dhaka, Bangladesh
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-400 text-sm text-center md:text-left'>
                        © {currentYear} <span className='text-blue-400 font-semibold'>IT Tech</span>. All rights reserved.
                    </p>
                    <div className='flex items-center gap-6'>
                        <a href='#' className='text-gray-400 hover:text-blue-400 text-sm transition-colors'>
                            Sitemap
                        </a>
                        <span className='text-slate-700'>|</span>
                        <a href='#' className='text-gray-400 hover:text-blue-400 text-sm transition-colors'>
                            Accessibility
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;