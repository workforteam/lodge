import React from 'react';
import LinkComponent from '../LinkComponent/LinkComponent';
import planning from '../../../../assets/icons/planning1.svg';
import pound from '../../../../assets/icons/pound1.svg';
import calc from '../../../../assets/icons/calc1.svg';
import comps from '../../../../assets/icons/comps1.svg';
import map from '../../../../assets/icons/map1.svg';

const EvaluateComponent = () => {
    return (
        <div className='mb-16 md:mb-0'>
            <h3 className='text-[#48484A] tracking-wide text-xl font-[Rubik] font-semibold mb-5'>Evaluate</h3>
            <LinkComponent
                path='#'
                icon={planning}
                title='Planning Applications'
            />
            <LinkComponent
                path='#'
                icon={pound}
                title='HMO Estimate'
            />
            <LinkComponent
                path='#'
                icon={pound}
                title='Long Let Estimate'
            />
            <LinkComponent
                path='#'
                icon={calc}
                title='Stamp Duty Calculator'
            />
            <LinkComponent
                path='#'
                icon={comps}
                title='Prperty Comparables'
            />
            <LinkComponent
                path='#'
                icon={calc}
                title='Cashflow Calculator'
            />
            <LinkComponent
                path='#'
                icon={calc}
                title='Yield Calculator'
            />
            <LinkComponent
                path='#'
                icon={map}
                title='Title Plot Map'
            />
            {/* <LinkComponent
                path='#'
                icon={tax}
                title='Council Tax Table'
            />
            <LinkComponent
                path='#'
                icon={airbnbLogo}
                title='AirBnb Valuations'
            /> */}
        </div>
    );
};

export default EvaluateComponent;