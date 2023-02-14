import React from 'react';
import brandLogo from '../../assets/logo/brand_logo.png';
import ResearchComponent from './localComponents/ResearchComponent/ResearchComponent';
import SourceComponent from './localComponents/SourceComponent/SourceComponent';
import EvaluateComponent from './localComponents/EvaluateComponent/EvaluateComponent';
import RightEndColumComponent from './RightEndColumComponent/RightEndColumComponent';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { IoIosWifi } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className='bg-[#F9FAFB]'>
            <div className='max-w-[1500px] mx-auto flex flex-col items-center md:flex-row md:items-start py-24'>
                <div className='md:mr-24 mb-20 md:mb-0'>
                    <img src={brandLogo} alt="brand logo" width={150} className='mb-8' />
                    <p className='mb-8'>Lorem ipsum dolor sit amet ut, consectetu adipisicing el <br /> it, sed do eiusmod tempor minim.</p>
                    <div className='flex items-center'>
                        <FaFacebookF size={16} className='hover:text-[#3FA9B6] mr-8 ' />
                        <FaTwitter size={16} className='hover:text-[#3FA9B6] mr-8 ' />
                        <FaPinterestP size={16} className='hover:text-[#3FA9B6] mr-8 ' />
                        <FaInstagram size={16} className='hover:text-[#3FA9B6] mr-8 ' />
                        <IoIosWifi size={22} className='hover:text-[#3FA9B6] mr-8 ' />
                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grow'>
                    <ResearchComponent />
                    <SourceComponent />
                    <EvaluateComponent />
                    <RightEndColumComponent />
                </div>
            </div>
            <div className='text-center bg-[#3FA9B6]'>
                <p className='max-w-[1500px] mx-auto text-[#fff] text-[14px] font-[Rubik] py-8'>Copyright &copy; 2023 by Lodgee | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;