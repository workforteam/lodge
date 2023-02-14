import React from 'react';
import KeyContent from '../../KeyContent/KeyContent';
import polygon from '../../../assets/icons/polygon.svg';
import postcodeIcon from '../../../assets/icons/postcodeIcon.svg';
import landOne from '../../../assets/icons/land1.svg';
import brickwall from '../../../assets/icons/brickwall1.svg';
import paymentIcon from '../../../assets/icons/payment-method1.svg';
import courtIcon from '../../../assets/icons/court1.svg';
import peopleIcon from '../../../assets/icons/Vector.svg';
import graduationIcon from '../../../assets/icons/graduation-hat1.svg';
import AlFiltersItem from '../../AlFiltersItem/AlFiltersItem';

const SourceCard = () => {
    return (
        <div className='bg-[#F9FAFB] rounded-3xl px-10'>
            <div className='flex justify-center items-center py-6'>
                <p className='text-[#6366F1] font-[Rubik] text-4xl font-normal mr-5'>02</p>
                <h6 className='text-2xl font-bold text-[#374151]'>Source</h6>
            </div>
            <div className='w-[95%] h-[1px] bg-[#D1D5DB] mx-auto mb-3'></div>
            <KeyContent
                path='#'
                icon={polygon}
                title='On-Market Residential'
                body='Draw custom search areas via out interactive map'
            />
            <KeyContent
                path='#'
                icon={postcodeIcon}
                title='Off-Market Residential'
                body='Search by outcode or full postcode'
            />
            <KeyContent
                path='#'
                icon={landOne}
                title='Commercial & Development Land'
                body='Search for commercial property and development land using our market leading filters'
            />
            <div className='w-[95%] h-[1px] bg-[#D1D5DB] mx-auto mt-7 mb-5'></div>
            <h4 className='text-center text-xl font-bold text-[#374151] mb-4'>30+ Al Filters</h4>
            <AlFiltersItem
                leftIcon={brickwall}
                leftTitle='Unmodernised'
                rightIcon={landOne}
                rightTitle='Land/Plots'
            />
            <AlFiltersItem
                leftIcon={paymentIcon}
                leftTitle='Cash Buyers Only'
                rightIcon={courtIcon}
                rightTitle='Repossessed'
            />
            <AlFiltersItem
                leftIcon={peopleIcon}
                leftTitle='Tenanted'
                rightIcon={graduationIcon}
                rightTitle='Near a university'
            />
        </div>
    );
};

export default SourceCard;