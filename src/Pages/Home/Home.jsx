import React from 'react';
import Banner from '../Home/Banner/Banner'
import Catagori from '../Home/Catagori/Catagori'
import Section2 from '../../ComPonent/SectionTitle/section2'
import PoPularmenu from '../PoPulatmenu/PoPularmenu'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagori></Catagori>
            <Section2></Section2>
            <PoPularmenu></PoPularmenu>
        </div>
    );
};

export default Home;