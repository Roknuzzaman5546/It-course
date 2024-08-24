import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Title from '@/Components/Shared/Title';


const Partnership = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (
        <div className=' my-10'>
            <Title
            heading={"partership"}
            Subheading={"Our most trusted partnership in our sector"}
            ></Title>
            <div className=' flex lg:flex-row flex-col justify-center items-center gap-4'>
                <div data-aos="zoom-in" className=' text-center flex flex-col bg-gray-800 h-60 justify-center p-2 rounded text-white font-rancho items-center gap-2'>
                    <img className='w-20 h-20 rounded' src={'/assets/home/partimage1.jpg'} alt="" />
                    <h2>Fueling our vision for cutting-edge technology, creative it brings expertise in [specific industry/technology]. </h2>
                </div>
                <div data-aos="zoom-out" className=' text-center flex flex-col bg-gray-800 h-60 justify-center p-2 rounded text-white font-rancho items-center gap-2'>
                    <img className=' w-20 h-20 rounded' src={'/assets/home/partimage2.png'} alt="" />
                    <h2>In our pursuit of excellence, we've joined forces with Data soft, a recognized leader in [industry/sector]. .</h2>
                </div>
                <div data-aos="zoom-in" className=' text-center flex flex-col bg-gray-800 h-60 justify-center p-2 rounded text-white font-rancho items-center gap-2'>
                    <img className=' w-20 h-20 rounded' src={'/assets/home/partimage3.jpg'} alt="" />
                    <h2>At the heart of our success is the collaboration with IT clan, a trailblazer in [relevant field]. By merging our strengths.</h2>
                </div>
                <div data-aos="zoom-out" className='text-center flex flex-col bg-gray-800 h-60 justify-center p-2 rounded text-white font-rancho items-center gap-2'>
                    <img className=' w-20 h-20 rounded' src={'/assets/home/partimage4.jpg'} alt="" />
                    <h2>Dedicated to excellence, Kazi Ltd...stands as a cornerstone in [industry/domain]. Our partnership extends beyond conventional.</h2>
                </div>
            </div>
        </div>
    );
};

export default Partnership;