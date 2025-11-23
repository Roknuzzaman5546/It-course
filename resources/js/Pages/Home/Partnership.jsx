import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Title from '../Shared/Title';


export default function Partnership() {
    useEffect(() => {
        AOS.init({ duration: 800, offset: 150 });
    }, []);


    const partners = [
        {
            img: '/assets/home/partimage1.jpg',
            text: 'Partnering with Creative IT to deliver next-gen technology & training.',
        },
        {
            img: '/assets/home/partimage2.png',
            text: 'Our collaboration with Datasoft empowers enterprise-grade innovations.',
        },
        {
            img: '/assets/home/partimage3.jpg',
            text: 'Working with IT Clan brings expert solutions and digital transformation.',
        },
        {
            img: '/assets/home/partimage4.png',
            text: 'Kazi Ltd. stands as a strong pillar in our growth and excellence.',
        },
    ];


    return (
        <div className="my-16 w-11/12 mx-auto">
            <Title
                heading="Partnership"
                Subheading="Our Most Trusted Partners in the IT Industry"
            />


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {partners.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-700"
                    >
                        <div className="flex justify-center mb-4">
                            <img
                                src={item.img}
                                alt="partner"
                                className="w-20 h-20 rounded-full object-cover shadow-md"
                            />
                        </div>
                        <p className="text-center text-sm opacity-90">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}