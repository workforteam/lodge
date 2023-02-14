import React from 'react';
import brandLogo from '../../assets/logo/brand_logo.png';
import { Link } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

const menuItems = [
    { id: 1, menuName: 'Property Search', path: '/property-search' },
    { id: 2, menuName: 'Postcode Table', path: '/postcode-table' },
    { id: 3, menuName: 'HMO Valuation', path: '/hmo-valuation' },
    { id: 4, menuName: 'Solid Price', path: '/solid-prices' },
    { id: 5, menuName: 'Planning Applications', path: '/planning-applications' },
]

const Navbar = () => {
    return (
        <>
            <div className='border-b py-2 bg-[#3FA9B6]'>
                <div className='max-w-[1220px] mx-auto flex justify-between items-center'>
                    <div className='flex'>
                        <div className='flex items-center border-r pr-16'>
                            <MdLocationPin size={14} color='#3FA9B6' />
                            <p className='text-[#fff] text-xs font-[Rubik] ml-3'>1025 Hollywood Blvd, LA</p>
                        </div>
                        <div className='flex items-center border-r pl-16 pr-16'>
                            <FaPhoneAlt size={11} color='#3FA9B6' />
                            <p className='text-[#fff] text-xs font-[Rubik] ml-3'>{`+84) 0123 4567 8`}</p>
                        </div>
                        <div className='flex items-center pl-16'>
                            <GoMail size={14} color='#3FA9B6' />
                            <p className='text-[#fff] text-xs font-[Rubik] ml-3'>contact@lodgee.com</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <HiOutlineShoppingBag size={20} color='#fff' className='mr-6' />
                        <BiSearch size={20} color='#fff' className='mr-6 mt-1' />
                        <p className='text-[#fff] text-[Rubik]'>Login</p>
                    </div>
                </div>
            </div>
            <nav className='shadow-md sticky top-0 bg-white'>
                <div className='max-w-[1220px] mx-auto flex justify-between items-center py-4'>
                    <div>
                        <Link to='/'><img src={brandLogo} alt="brand logo" width={100} /></Link>
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex'>
                            {menuItems.map(menuItem =>
                                <Link
                                    key={menuItem.id}
                                    to={menuItem.path}
                                    className='mr-8'
                                >
                                    <li className='text-[#475f7b] font-[Rubik]'>{menuItem.menuName}</li>
                                </Link>
                            )}
                        </ul>
                        <Link to='#'>
                            <button className='bg-[#3FA9B6] hover:bg-[#338792] duration-500 text-white font-medium py-3 px-8 rounded-full'>Get a quote</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;