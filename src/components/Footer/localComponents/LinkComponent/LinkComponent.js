import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ path, icon, title }) => {
    return (
        <Link to={path} className='flex mb-4'>
            <h6 className='text-[#74767e] hover:underline font-[Rubik]'>{title}</h6>
        </Link>
    );
};

export default LinkComponent;