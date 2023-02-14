import React from 'react';
import KeyContent from '../../KeyContent/KeyContent';
import mapOne from '../../../assets/icons/map1.svg';
import forRentTwo from '../../../assets/icons/for-rent2.svg';
import airbnbLogoTwo from '../../../assets/icons/airbnb-logo2.svg';
import planningOne from '../../../assets/icons/planning1.svg';

const EvaluateCard = () => {
    return (
        <div className='bg-[#F9FAFB] rounded-3xl px-10'>
            <div className='flex justify-center items-center py-6'>
                <p className='text-[#6366F1] font-[Rubik] text-4xl font-normal mr-5'>03</p>
                <h6 className='text-2xl font-bold text-[#374151]'>Evaluate</h6>
            </div>
            <div className='w-[95%] h-[1px] bg-[#D1D5DB] mx-auto mb-3'></div>
            <KeyContent
                path='#'
                icon={mapOne}
                title='Land Owenership map'
                body='Analyse freehold titles and marcket data for England & Wales'
            />
            <KeyContent
                path='#'
                icon={forRentTwo}
                title='Sales & Rental Valuation'
                body='Accurate valuation of property value & expected long term rental'
            />
            <KeyContent
                path='#'
                icon={forRentTwo}
                title='HMO Valuation'
                body='Get accurate insight on room rates for any location in the UK'
            />
            <KeyContent
                path='#'
                icon={airbnbLogoTwo}
                title='AirBnb Valuations'
                body='Instant valuation of potential SA deal from any address in the UK'
            />
            <KeyContent
                path='#'
                icon={forRentTwo}
                title='Solid Prices'
                body='Analyse HM Land Registry solid prices combined with accurate property size & &#8356;/sqft'
            />
            <KeyContent
                path='#'
                icon={planningOne}
                title='Planning Applications'
                body='Powerfull planning application search and tracking with 99.96% coverage of the UK'
            />
        </div>
    );
};

export default EvaluateCard;