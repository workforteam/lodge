import React from 'react';
import { Link } from 'react-router-dom';
import mapImage from '../../assets/images/house-prices.webp';
import { housePriceData } from '../../utilities/arrayOfObjects/housePriceData';

const SolidPrices = () => {
    return (
        <div className='font-[Rubik]'>
            <section className='max-w-[1220px] mx-auto flex justify-between items-center py-20'>
                <div className='pr-8'>
                    <img src={mapImage} alt="Property map" width={2200} />
                </div>
                <div className='pl-8'>
                    <h1 className='text-[#232f3c] text-5xl font-bold mb-4'>UK House Price Data</h1>
                    <p className='text-[#6b7280] text-[18px] mb-4'>
                        Access high-level sold house price data for the whole of the UK. With our leading platform, you can analyse transaction volume and prices along with accurate £/sqft for every transaction. You will also have access to a property's full transaction lifecycle with data on all historical transactions.
                    </p>
                    <Link to='#'><button className='text-white font-semibold bg-[#3FA9B6] hover:bg-[#338792] duration-500 rounded-full px-8 py-3'>Start your trial today</button></Link>
                </div>
            </section>
            <section className='max-w-[1220px] mx-auto pb-32'>
                <div className='text-center mb-10'>
                    <h1 className='text-[#3FA9B6] text-4xl mb-4'>Free House Price Data</h1>
                    <p className='text-[#6b7280] text-[18px]'>
                        Check out our free, no sign-up required house prices pages below. We offer detailed data covering the last 5 years for each postcode area.
                    </p>
                </div>
                <div className='grid grid-cols-6 gap-4'>
                    {housePriceData.map(name => {
                        return (
                            <div key={name.id}>
                                <Link key={name.id} to={name.link} className='text-[#35475c]'>{name.name}</Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
};

export default SolidPrices;