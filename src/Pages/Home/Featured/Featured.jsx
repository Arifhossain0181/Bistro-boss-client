import React from 'react';
import SectionTilte from '../../../ComPonent/SectionTitle/SectionTilte'
import imgs from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20' >
           <SectionTilte heading='Featured item' 
           subheading='Check it out'>
            </SectionTilte> 
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 '>
                <div>
                <img src={imgs} alt="" />
            </div>
            <div className='md:ml-10'>
                <h5>Aug 20, 2029</h5>
                <h5 className='uppercase'>where can i get some?</h5>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis reprehenderit in tempora, quam nesciunt voluptatibus dolorem neque eos saepe quo, tenetur distinctio hic vero optio magnam quasi quibusdam sequi. Minus.</h5>
                <button className="btn btn-outline border-0 border-b-4">ORDER NOW</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;