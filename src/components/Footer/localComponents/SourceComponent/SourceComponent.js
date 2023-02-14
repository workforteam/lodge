import React from 'react';
import LinkComponent from '../LinkComponent/LinkComponent';
import brickwall from '../../../../assets/icons/brickwall1.svg';
import bank from '../../../../assets/icons/bank2.svg';
import land from '../../../../assets/icons/land1.svg';
import payment from '../../../../assets/icons/payment-method1.svg';
import friends from '../../../../assets/icons/friends1.svg';
import slowMotion from '../../../../assets/icons/slow-motion1.svg';
import portfolio from '../../../../assets/icons/portfolio1.svg';
import boxes from '../../../../assets/icons/boxes1.svg';

const SourceComponent = () => {
    return (
        <div  className='mb-16 md:mb-0'>
            <h3 className='text-[#48484A] tracking-wide text-xl font-[Rubik] font-semibold mb-5'>Source</h3>
            <LinkComponent
                path='#'
                icon={brickwall}
                title='Unmodernised'
            />
            <LinkComponent
                path='#'
                icon={bank}
                title='Repossessed'
            />
            <LinkComponent
                path='#'
                icon={land}
                title='Land/plots'
            />
            <LinkComponent
                path='#'
                icon={payment}
                title='Cash buyers only'
            />
            <LinkComponent
                path='#'
                icon={friends}
                title='HMO licenced'
            />
            <LinkComponent
                path='#'
                icon={slowMotion}
                title='Slow to sell'
            />
            <LinkComponent
                path='#'
                icon={portfolio}
                title='Investment portfolios'
            />
            <LinkComponent
                path='#'
                icon={boxes}
                title='Planning granted'
            />
        </div>
    );
};

export default SourceComponent;