import React from 'react';
import { Link } from 'react-router-dom';
import divider from '../../Assets/separator.png';
const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-slate-100 rounded ">
            <img src={divider} alt="" className='' />
            <div class="grid grid-flow-col gap-4 ">
                <Link to='/about' class="link link-hover hover:text-primary font-semibold">About us</Link>
                <Link to='' class="link link-hover hover:text-primary font-semibold">Contact</Link>
                <Link to='/myportfolio' class="link link-hover hover:text-primary font-semibold">Portfolio</Link>
                <Link to='' class="link link-hover hover:text-primary font-semibold">Policy</Link>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <span className="text-gray-500 hover:text-primary">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </span>
                    <span className="ml-3 text-gray-500 hover:text-primary">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </span>
                    <span className="ml-3 text-gray-500 hover:text-primary">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </span>
                    <span className="ml-3 text-gray-500 hover:text-primary">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </span>
                </div>
            </div>

            <div>
                <p className='font-semibold'>Copyright © 2022 - All right reserved. Made by <span className='text-primary'>Anindita</span>.</p>
            </div>
        </footer>
    );
};

export default Footer;