import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/img1.jpg'

const Header = () => {
    return (
        <header style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundRepeat: 'no-repeat',
            height: '768px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '100PX'
        }}>
            <div className='text-center'>
                <h1 className='text-6xl text-white font-black font-[system-ui] tracking-wide leading-normal'>The UK's #1 Property Intelligence <br className='' /> Platform</h1>
                <p className='text-[#D1D1D1] text-[18px] font-medium leading-7 mt-5 mx-12 pb-10 tracking-wide'>
                    Save time, boost your returns, and make better investment decisions with a property data platform <br /> that understands exactly what information you need, when you need it. Powered by <br /> over 35 million live datapoints and an easy-to-use interface, Property <br /> Market Intel is trusted by investors across the UK.
                </p>
                <Link to='#'>
                    <button className='bg-[#3FA9B6] hover:bg-[#338792] duration-500 text-white font-medium py-4 px-12 rounded-full'>Get a quote</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;