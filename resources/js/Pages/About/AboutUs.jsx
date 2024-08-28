import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';
import React from 'react';

const AboutUs = ({ auth }) => {
    return (
        <Main auth={auth}>
            <Head title='About-us'></Head>
            <div>
                {/* About us header section */}
            </div>
        </Main>
    );
};

export default AboutUs;
