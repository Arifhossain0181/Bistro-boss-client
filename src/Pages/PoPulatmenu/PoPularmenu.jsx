import React from 'react';
import SectionTilte from '../../ComPonent/SectionTitle/SectionTilte'
import  { useState,useEffect } from 'react';
import Menuitams from '../Shared/Menuiteam/Menuitams'
const PoPularmenu = () => {
    const [menu, setmenu] = useState([])
    useEffect(() =>{
        fetch('/Menu.json')
        .then(res => res.json())
        .then(data=> {
            const popularitems = data.filter(item => item.category === 'popular')
            setmenu(popularitems)
        })
    },[])
     return (
        <section className='mb-12'>
            <SectionTilte
            heading='From Our Menu'
            subheading='PoPular Items'
            ></SectionTilte>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {
                    menu.map(item => <Menuitams key={item._id } item={item}></Menuitams>)
                }
            </div>
        </section>
    );
};

export default PoPularmenu;