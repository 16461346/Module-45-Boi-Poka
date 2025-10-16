import React from 'react';
import Bannar from '../../Components/Bannar/Bannar';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data= useLoaderData();
    return (
        <div>
            <Bannar/>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;