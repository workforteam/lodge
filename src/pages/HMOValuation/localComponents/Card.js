import React from 'react';
import { FaLandmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ icon, title, body }) => {
    return (
        <Link className='bg-[#3FA9B6] p-10 rounded-lg'>
            <div className='flex justify-center mb-5'>
                <FaLandmark size={48} color='#eee' />
            </div>
            <h2 className='text-center text-white text-2xl mb-4'>{title}</h2>
            <p className='text-white text-center'>{body}</p>
        </Link>
    );
};

export default Card;