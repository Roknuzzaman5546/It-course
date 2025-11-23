import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Title from '../Shared/Title';
import Classes from '../AllClass/Classes';
import { Link } from '@inertiajs/react';

const Classcourse = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('/class.json')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, []);

    return (
        <div className="my-20">
            <Title
                heading={"Classes & coursees"}
                Subheading={"This is our most popular class"}
            />

            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                {
                    course.slice(0, 12).map(item => <Classes
                        key={item.id}
                        item={item}
                    ></Classes>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <Link href={route("all.class")}>
                    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded shadow-md hover:bg-blue-700 transition-all">
                        Explore All Classes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Classcourse;
