import React from 'react';
import Banner from './Banner';
import Partnership from './Partnership';
import Classcours from './Classcours';
import Total from './Total';
import Teaching from './Teaching';
import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';
import ItShow from './ItShow';

const Home = ({auth}) => {
    return (
        <Main auth={auth}>
            <Head title="Home" />
            <div>
                <Banner></Banner>
                <div className="overflow-hidden">
                    <Classcours></Classcours>
                    <Partnership></Partnership>
                    <ItShow></ItShow>
                    <Total></Total>
                    <Teaching></Teaching>
                </div>
            </div>
        </Main>
    );
};

export default Home;
