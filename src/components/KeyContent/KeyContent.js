import React from 'react';
import { Link } from 'react-router-dom';

const KeyContent = ({ icon, title, body, path }) => {
    return (
        <Link to={path} className='flex items-start mb-6'>
            <img src={icon} alt="card icon" width={25} />
            <div className='ml-2'>
                <h5 className='text-[#374151] font-semibold'>{title}</h5>
                <p className='text-[#7e8fa3] text-xs'>{body}</p>
            </div>
        </Link>
    );
};

export default KeyContent;