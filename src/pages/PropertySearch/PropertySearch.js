import React from 'react';
import EvaluateCard from '../../components/Cards/EvaluateCard/EvaluateCard';
import ResearchCard from '../../components/Cards/ResearchCard/ResearchCard';
import SourceCard from '../../components/Cards/SourceCard/SourceCard';
import Header from '../../components/Header/Header';

const PropertySearch = () => {
    return (
        <section className=''>
            {/* <h1 className='text-center text-5xl text-[#374151] font-black font-[system-ui] tracking-wide'>The UK's <span className='text-[#6366F1]'>#1</span> Property Intelligence Platform</h1>
            <p className='text-center mt-5  text-[#9ca3af] text-[18px] font-medium leading-7 mx-12 pb-10 tracking-wide'>Save time, boost your returns, and make better investment decisions with a property data platform that understands exactly what information you need, when you need it. Powered by over 35 million live datapoints and an easy-to-use interface, Property Market Intel is trusted by investors across the UK.</p> */}
            <Header />
            <div className='max-w-[1300px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24'>
                <ResearchCard />
                <SourceCard />
                <EvaluateCard />
            </div>
        </section>
    );
};

export default PropertySearch;