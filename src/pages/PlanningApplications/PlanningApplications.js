import React from 'react';
import { Link } from 'react-router-dom';
import planningMap from '../../assets/images/planningmap1.webp';
import avaterOne from '../../assets/avatar/testo1.webp';
import avaterTwo from '../../assets/avatar/testo4.webp';
import avaterThree from '../../assets/avatar/testo2.webp';
import Card from './localComponents/Card';

const PlanningApplications = () => {
    return (
        <div className='max-w-[1500px] mx-auto font-[Rubik]'>
            <section className='flex justify-between items-center py-24'>
                <div className='pr-10'>
                    <img src={planningMap} alt="Property map" width={1200} className='rounded-xl' />
                </div>
                <div className='pl-10'>
                    <h1 className='text-[#338792] text-4xl font-medium mb-4'>Search via our interactive map</h1>
                    <p className='text-[#6b7280] mb-10'>
                        Use our map view to interact and see where applications have/are being made in relation to your property. All applications have a direct link to the official council page for more detailed information.
                    </p>
                    <div className='flex'>
                        <div>
                            <input type="text" className='w-96 text-[#6b7280] bg-[#F9F9FA] px-5 py-[10px] mr-5 border rounded-full' />
                            <p className='text-[#6b7280] text-sm mt-2'>Search using any UK postcode</p>
                        </div>
                        <Link to='#'><button className='text-white font-semibold bg-[#3FA9B6] hover:bg-[#338792] duration-500 rounded-full px-8 py-3'>Start your trial today</button></Link>
                    </div>
                </div>
            </section>
            <section className='py-24'>
                <div className='text-center mb-10'>
                    <h1 className='text-[#475f7b] text-4xl font-medium mb-4'>Or use our planning table</h1>
                    <p className='text-[#475f7b]'>
                        Our planning table provides an alternative way to view planning applications after your search. With our planning table, all data can be downloaded to CSV for your own further research and <br /> analysis.
                    </p>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>STATE</th>
                            <th>DESCRIPTION</th>
                            <th>TYPE</th>
                            <th>SIZE</th>
                            <th>START DATE</th>
                            <th>AUTHORITY NAME</th>
                            <th>Deatils</th>
                        </tr>
                        <tr>
                            <td>Permited</td>
                            <td>Erection of detached outbuilding to side of dwellinghouse.</td>
                            <td>Heritage</td>
                            <td>Medium</td>
                            <td>2021-06-15	</td>
                            <td>Manchester</td>
                            <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                        </tr>
                        <tr>
                            <td>Permited</td>
                            <td>Erection of mixed-use development (residential, hotel, leisure and commercial....</td>
                            <td>Outline</td>
                            <td>Large</td>
                            <td>2021-08-27</td>
                            <td>Manchester</td>
                            <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                        </tr>
                        <tr>
                            <td>Undecided</td>
                            <td>Conversion of basement void to living accommodation for ground floor flat...</td>
                            <td>Heritage</td>
                            <td>Medium</td>
                            <td>2021-05-21</td>
                            <td>Manchester</td>
                            <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                        </tr>
                        <tr>
                            <td>Rejected</td>
                            <td>Internal and external alterations to listed building</td>
                            <td>Heritage</td>
                            <td>Small</td>
                            <td>2020-11-27</td>
                            <td>Manchester</td>
                            <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                        </tr>
                        <tr>
                            <td>Conditions</td>
                            <td>Installation of replacement windows</td>
                            <td>Heritage</td>
                            <td>Small</td>
                            <td>2021-07-08</td>
                            <td>Manchester</td>
                            <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                        </tr>
                        <tr>
                            <td>Withdrawn</td>
                            <td>Erection of single storey extension at basement level with terrace above...</td>
                            <td>Outline</td>
                            <td>Medium</td>
                            <td>2021-08-08</td>
                            <td>Manchester</td>
                            <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                        </tr>
                        <tr>
                            <td>Permitted</td>
                            <td>Erection of detached outbuilding to side of dwellinghouse.</td>
                            <td>Heritage</td>
                            <td>Medium</td>
                            <td>2021-06-15</td>
                            <td>Manchester</td>
                            <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className='pb-24'>
                <div className='grid grid-cols-3 gap-5'>
                    <Card
                        avatar={avaterOne}
                        comment='Very good website if you are a property investor/landlord of any size. All comparison information is available on this website and the price is extremely good value for what you get.'
                        name='Cameron Stone'
                        designation='Property Investor (England)'

                    />
                    <Card
                        avatar={avaterTwo}
                        comment='Great system, saves loads of time compared to going through the portals individually - also helps to spot the deals before competition!'
                        name='Steven Musgrove'
                        designation='Property Investor (England)'

                    />
                    <Card
                        avatar={avaterThree}
                        comment='Great platform, I can say hands down that I would not have found my last 2 acquisitions if it was not for this service. Even more impressive recently was when I reached out to the support team and twice have had a response back in minutes.'
                        name='Archie Smith'
                        designation='Property Investor (England)'

                    />
                </div>
            </section>
        </div>
    );
};

export default PlanningApplications;