"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { navLinks } from '@/constant/Constant';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full h-[vh] bg-gray-100 mb-5'>
            <div className='w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <Image src="/images/logo.svg" alt="logo" width={120} height={100} className='rounded-[50%]' />
                    <span className='text-2xl font-bold text-gray-900'>Black Mass</span>
                </div>
                {/* navLinks */}
                <div className='lg:flex hidden items-center space-x-10'>
                    {navLinks.map((link) => (
                        <Link href={link.url} key={link.id}>
                            <p className='text-lg font-semibold cursor-pointer hover:text-green-600 hover:underline transition-all duration-200 text-gray-900'>
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>
                {/* icons */}
                <div className='flex items-center space-x-8'>
                    <BiSearch className='w-6 h-6 cursor-pointer hover:text-green-600' />
                    <FaBars className='w-6 h-6 cursor-pointer lg:hidden hover:text-green-600' onClick={toggleMenu} />
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100 w-full`}>
                <div className='flex justify-end p-5'>
                    <FaTimes className='w-6 h-6 cursor-pointer hover:text-green-600' onClick={toggleMenu} />
                </div>
                <div className='flex flex-col items-center space-y-5'>
                    {navLinks.map((link) => (
                        <Link href={link.url} key={link.id}>
                            <p className='text-lg font-semibold cursor-pointer hover:text-green-600 hover:underline transition-all duration-200 text-gray-900'>
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Nav;
