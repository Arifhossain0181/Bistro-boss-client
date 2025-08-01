import React from 'react';
import Banner from '../Home/Banner/Banner'
import Catagori from '../Home/Catagori/Catagori'
import Section2 from '../../ComPonent/SectionTitle/section2'
import PoPularmenu from '../PoPulatmenu/PoPularmenu'
import Section3 from '../../ComPonent/SectionTitle/Section3'
import Featured from '../Home/Featured/Featured'
import Testimonials from '../Home/Testimonials/Testimonials'
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                    <title>Bistro Boss | Home</title>
                    
                  </Helmet>
            <Banner></Banner>
            <Catagori></Catagori>
            <Section2></Section2>
            <PoPularmenu></PoPularmenu>
            <Section3></Section3>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;