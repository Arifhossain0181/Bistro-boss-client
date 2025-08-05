import React from 'react';
import SectionTilte from '../../ComPonent/SectionTitle/SectionTilte'
import  { useState,useEffect } from 'react';
import Menuitams from '../Shared/Menuiteam/Menuitams'
import  UseMenu from '../../../src/Hooks/UseMenu'
const PoPularmenu = () => {
const [menu ] = UseMenu()
const PoPular = menu.filter(item => item.category === 'popular')
   // const [menu, setmenu] = useState([])
   // useEffect(() =>{
      //  fetch('/Menu.json')
      //  .then(res => res.json())
      //  .then(data=> {
       //     const popularitems = data.filter(item => item.category === 'popular')
      //      setmenu(popularitems)
      //  })
  //  },[])
    
     return (
        <section className='mb-12'>
            <SectionTilte
            heading='From Our Menu'
            subheading='PoPular Items'
            ></SectionTilte>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {
                    PoPular.map(item => <Menuitams key={item._id } item={item}></Menuitams>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 mt-4 text-center'>View full menu </button>
        </section>
    );
};

export default PoPularmenu;