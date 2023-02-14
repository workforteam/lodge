import React from 'react';
import LinkComponent from '../localComponents/LinkComponent/LinkComponent';
import pound from '../../../assets/icons/pound1.svg';
import chromeIcon from '../../../assets/icons/chrome-icon.svg';
import expert from '../../../assets/icons/expert1.svg';

const RightEndColumComponent = () => {
    return (
        <div>
            <div className='mb-12'>
                <h3 className='text-[#48484A] tracking-wide text-xl font-[Rubik] font-semibold mb-5'>Track</h3>
                <LinkComponent
                    path='#'
                    icon={pound}
                    title='Property Valuation'
                />
            </div>
            <div className='mb-12'>
                <h3 className='text-[#48484A] tracking-wide text-xl font-[Rubik] font-semibold mb-5'>Chrome Extension</h3>
                <LinkComponent
                    path='#'
                    icon={chromeIcon}
                    title='Install extension'
                />
            </div>
            <div>
                <h3 className='text-[#48484A] tracking-wide text-xl font-[Rubik] font-semibold mb-5'>Become An Affiliate</h3>
                <LinkComponent
                    path='#'
                    icon={expert}
                    title='Join the Program'
                />
            </div>
            {/* <div className='mb-12'>
                <h3 className='text-[14px] text-[#475f7b] tracking-widest font-[Rubik] font-medium mb-3'>Knowledge Center</h3>
                <LinkComponent
                    path='#'
                    icon={expert}
                    title='Blog'
                />
            </div> */}
        </div>
    );
};

export default RightEndColumComponent;