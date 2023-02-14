import React from 'react';
import LinkComponent from '../LinkComponent/LinkComponent';
import polygon from '../../../../assets/icons/polygon.svg';
import postcodeIcon from '../../../../assets/icons/postcodeIcon.svg';
import percentage from '../../../../assets/icons/group212.svg';
import pulseHeart from '../../../../assets/icons/pulse-heart1.svg';
import bankTwo from '../../../../assets/icons/bank2.svg';
import expertOne from '../../../../assets/icons/expert1.svg';
import tax from '../../../../assets/icons/tax1.svg';
import airbnbLogo from '../../../../assets/icons/airbnb-logo.svg';

const ResearchComponent = () => {
    return (
        <div className='mb-16 md:mb-0'>
            <h3 className='text-[#48484A] text-xl tracking-wide font-[Rubik] font-semibold mb-5'>Research</h3>
            <LinkComponent
                path='#'
                icon={polygon}
                title='Search by Area'
            />
            <LinkComponent
                path='#'
                icon={postcodeIcon}
                title='Search by Postcode'
            />
            <LinkComponent
                path='#'
                icon={percentage}
                title='Rental Yield Map'
            />
            <LinkComponent
                path='#'
                icon={pulseHeart}
                title='Rental Yield Map'
            />
            <LinkComponent
                path='#'
                icon={bankTwo}
                title='Economic Data'
            />
            <LinkComponent
                path='#'
                icon={expertOne}
                title='Expert Analysis'
            />
            <LinkComponent
                path='#'
                icon={tax}
                title='Council Tax Table'
            />
            <LinkComponent
                path='#'
                icon={airbnbLogo}
                title='Short-term rental data'
            />
        </div>
    );
};

export default ResearchComponent;