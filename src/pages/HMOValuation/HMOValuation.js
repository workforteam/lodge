import React from 'react';
import Card from './localComponents/Card';

const HMOValuation = () => {
    return (
        <div className='bg-[#F5F5F5] font-[Rubik] pb-20'>
            <div className='text-center py-20'>
                <h1 className=' text-4xl mb-5 leading-normal'>Property/Rental Valuations</h1>
                <p className=' w-[70%] mx-auto'>
                    Our up-to-date valuation engine can provide a property valuation, HMO room rate estimate or a long term rental estimate. Our valuations are calculated from live and historic market data providing you with fast & accurate results.
                </p>
            </div>
            <div className=' lg:w-[1500px] mx-auto px-5 lg:px-0 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10'>
                <Card
                    title='Property Valuation'
                    body='Get a valuation for any urban or suburban house/flat in England or Wales. All valuations are based on detailed property characteristics and local £/sqft data'
                />
                <Card
                    title='Rental Estimate'
                    body='Get a rental for any urban or suburban house/flat in the UK. All valuations are based on detailed property characteristics and local rental rates'
                />
                <Card
                    title='HMO Estimate'
                    body='Get HMO room estimates for any urban or suburban house/flat in the UK. Prices for a double room w/ensuite, double shared bathroom, single w/ensuite & single w/shared bathroom.'
                />
            </div>
        </div>
    );
};

export default HMOValuation;