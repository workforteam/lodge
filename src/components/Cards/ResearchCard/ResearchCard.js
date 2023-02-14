import React from 'react';
import polygon from '../../../assets/icons/polygon.svg';
import airbnbLogo2 from '../../../assets/icons/airbnb-logo2.svg';
import comparables from '../../../assets/icons/comps1.svg';
import postcodeTable from '../../../assets/icons/ftinserttable1.svg';
import searchIcon from '../../../assets/icons/search-icon.svg';
import pdfIcon from '../../../assets/icons/pdf-report-builder.svg';
import KeyContent from '../../KeyContent/KeyContent';

const ResearchCard = () => {
    return (
        <div className='bg-[#F9FAFB] rounded-3xl px-10'>
            <div className='flex justify-center items-center py-6'>
                <p className='text-[#6366F1] font-[Rubik] text-4xl font-normal mr-5'>01</p>
                <h6 className='text-2xl font-bold text-[#374151]'>Research</h6>
            </div>
            <div className='w-[95%] h-[1px] bg-[#D1D5DB] mx-auto mb-3'></div>
            <KeyContent
                path='#'
                icon={polygon}
                title='Local Area Data'
                body='Price, rents, &#8356;/sqft, yields, HMO rates, planning applications, transport links & area demographics'
            />
            <KeyContent
                path='#'
                icon={airbnbLogo2}
                title='Short-Term Rental Data'
                body='UK Airbnb & Vrbo market data'
            />
            <KeyContent
                path='#'
                icon={comparables}
                title='Comparables'
                body='Quickly find comparables for your property'
            />
            <KeyContent
                path='#'
                icon={postcodeTable}
                title='Postcode Table'
                body='Key investment statistics by postcode'
            />
            <KeyContent
                path='#'
                icon={searchIcon}
                title='Property Search'
                body='Search for detailed individual property data'
            />
            <KeyContent
                path='#'
                icon={searchIcon}
                title='Company Search'
                body='Find all properties linkied to UK and foreign companies'
            />
            <KeyContent
                path='#'
                icon={pdfIcon}
                title='PDF Report Builder'
                body='Build custom PDF reports for investment oppurtunities and make reports'
            />
        </div>
    );
};

export default ResearchCard;