import React from 'react';

const Card = ({ avatar, comment, name, designation }) => {
    return (
        <div className='shadow-xl rounded-lg p-10 relative'>
            <div className='flex justify-center mb-4'>
                <img src={avatar} alt="Avater" />
            </div>
            <p className='text-center text-[#475f7b] pb-16'>{comment}</p>
            <div className='absolute bottom-10 right-10'>
                <p className='text-end text-[#475f7b] text-sm font-medium'>{name}</p>
                <p className='text-end text-[#6b7280]'>{designation}</p>
            </div>
        </div>
    );
};

export default Card;