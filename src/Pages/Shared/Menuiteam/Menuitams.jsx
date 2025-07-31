import React from 'react';

const Menuitams = ({item}) => {
    const {name ,recipe,price,category,image} = item
    return (
        <div className='flex space-x-5'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name } ---------</h3>
                <h6>{recipe}</h6>

            </div>
            <h6 className='text-yellow-500'>${price}</h6>
        </div>
    );
};

export default Menuitams;