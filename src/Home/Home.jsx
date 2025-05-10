import React from 'react';
import Product from '../Product/Product';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'Gadget Heaven | Home';
      }, []);
    return (
       
        <div className=' max-w-full md:max-w-[90%] mx-auto '>
       <Product></Product>
        </div>
           
        
    );
};

export default Home;