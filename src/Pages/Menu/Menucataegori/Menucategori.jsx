import React from 'react';
import Menuitams from '../../Shared/Menuiteam/Menuitams'
import Cover from '../../Shared/Cover/Cover'
import { Link } from 'react-router-dom';

const Menucategori = ({ items, title, coverimg }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={coverimg} title={title}></Cover>}            

            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 my-16'>
                {
                    items.map(item => <Menuitams key={item._id} item={item}></Menuitams>)
                }
            </div>

            {/* ✅ Centered Button */}
            <div className='text-center mt-4'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
};

export default Menucategori;
