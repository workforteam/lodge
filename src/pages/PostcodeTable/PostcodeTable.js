import React from 'react';
import { Link } from 'react-router-dom';

const PostcodeTable = () => {
    return (
        <>
            <div className=' font-[Rubik] text-center py-20'>
                <h1 className=' text-4xl mb-5 leading-normal'>Explore Properties and Investment opportunities <br /> by Postcode</h1>
                <p className=' w-[70%] mx-auto'>
                    Want to explore investment areas and opportunities using a postcode? You can do that easily with our search tool below. Simply type in a postcode and away you go. You can also redfine the area with a custom drawing if it doesn't suit your needs. This way, you can discover unique opportunities in postcodes of interest. Give it a go for free now.
                </p>
            </div>
            <div className='w-[95%] mx-auto mb-20  rounded-lg'>
                <table>
                    <tr>
                        <th>POSTCODE</th>
                        <th>AVERAGE <br /> ASKING PRICE</th>
                        <th>AVG <br /> £/SQFT</th>
                        <th>AVG. STUDIO <br /> ASKING</th>
                        <th>AVG. 1 BED <br /> ASKING</th>
                        <th>AVG. 2 BED <br /> ASKING</th>
                        <th>AVG. 3 BED <br /> ASKING</th>
                        <th>AVG. 4 BED <br /> ASKING</th>
                        <th>AVG. STUDIO <br /> RENT (YIELD</th>
                        <th>AVG. 1 BED <br /> RENT (YIELD)</th>
                        <th>AVG. 2 BED <br /> RENT (YIELD)</th>
                        <th>AVG. 3 BED <br /> RENT (YIELD)</th>
                        <th>AVG. 4 BED <br /> RENT (YIELD)</th>
                        <th>DETAILS</th>
                    </tr>
                    <tr>
                        <td className='text-[#475f7b] font-medium'>AB12</td>
                        <td>£137,000</td>
                        <td>£567</td>
                        <td>£118,000</td>
                        <td>£118,000</td>
                        <td>£127,000</td>
                        <td>£137,000</td>
                        <td>£158,000</td>
                        <td>£550 (8.3%)</td>
                        <td>£118 (6.2%)</td>
                        <td>£127 (12.4%)</td>
                        <td>£137 (7.32%)</td>
                        <td>£158 (8.54%)</td>
                        <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                    </tr>
                    <tr>
                        <td className='text-[#475f7b] font-medium'>AB12</td>
                        <td>£137,000</td>
                        <td>£567</td>
                        <td>£118,000</td>
                        <td>£118,000</td>
                        <td>£127,000</td>
                        <td>£137,000</td>
                        <td>£158,000</td>
                        <td>£550 (8.3%)</td>
                        <td>£118 (6.2%)</td>
                        <td>£127 (12.4%)</td>
                        <td>£137 (7.32%)</td>
                        <td>£158 (8.54%)</td>
                        <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                    </tr>
                    <tr>
                        <td className='text-[#475f7b] font-medium'>AB12</td>
                        <td>£137,000</td>
                        <td>£567</td>
                        <td>£118,000</td>
                        <td>£118,000</td>
                        <td>£127,000</td>
                        <td>£137,000</td>
                        <td>£158,000</td>
                        <td>£550 (8.3%)</td>
                        <td>£118 (6.2%)</td>
                        <td>£127 (12.4%)</td>
                        <td>£137 (7.32%)</td>
                        <td>£158 (8.54%)</td>
                        <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                    </tr>
                    <tr>
                        <td className='text-[#475f7b] font-medium'>AB12</td>
                        <td>£137,000</td>
                        <td>£567</td>
                        <td>£118,000</td>
                        <td>£118,000</td>
                        <td>£127,000</td>
                        <td>£137,000</td>
                        <td>£158,000</td>
                        <td>£550 (8.3%)</td>
                        <td>£118 (6.2%)</td>
                        <td>£127 (12.4%)</td>
                        <td>£137 (7.32%)</td>
                        <td>£158 (8.54%)</td>
                        <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                    </tr>
                    <tr>
                        <td className='text-[#475f7b] font-medium'>AB12</td>
                        <td>£137,000</td>
                        <td>£567</td>
                        <td>£118,000</td>
                        <td>£118,000</td>
                        <td>£127,000</td>
                        <td>£137,000</td>
                        <td>£158,000</td>
                        <td>£550 (8.3%)</td>
                        <td>£118 (6.2%)</td>
                        <td>£127 (12.4%)</td>
                        <td>£137 (7.32%)</td>
                        <td>£158 (8.54%)</td>
                        <td><Link to='#' className='text-[blue] hover:text-[#716FA8] font-medium'>View</Link></td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default PostcodeTable;