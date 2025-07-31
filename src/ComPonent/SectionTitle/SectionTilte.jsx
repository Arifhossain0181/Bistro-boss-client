import React from 'react';

const SectionTilte = ({heading ,subheading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-8'>
            <h5 className='text-yellow-600 mb-4'>---{subheading}---</h5>
            <h2 className='text-4xl uppercase border-y-4 py-2. mb '>{heading}</h2>
            
        </div>
    );
};

export default SectionTilte;