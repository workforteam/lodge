import React from 'react';

const AlFiltersItem = ({ leftIcon, leftTitle, rightIcon, rightTitle }) => {
    return (
        <div className='flex justify-between mb-8'>
            <div className='flex items-center'>
                <img src={leftIcon} alt="card icon" width={25} />
                <h6 className='ml-2 text-[#475f7b]'>{leftTitle}</h6>
            </div>
            <div className='flex items-center'>
                <img src={rightIcon} alt="card icon" width={25} />
                <h6 className='ml-2 text-[#475f7b]'>{rightTitle}</h6>
            </div>
        </div>
    );
};

export default AlFiltersItem;