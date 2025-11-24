import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Banner = () => {
    const [course, setCourse] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(0);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        fetch('/class.json')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, []);

    // Image loading handler
    const handleImageLoad = (index) => {
        setLoadedImages(prev => ({
            ...prev,
            [index]: true
        }));
    };

    if (course.length === 0) {
        return (
            <div className="h-60 flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    const prevSlider = () =>
        setCurrentSlider(currentSlider === 0 ? course.slice(0, 4).length - 1 : currentSlider - 1);

    const nextSlider = () =>
        setCurrentSlider(currentSlider === course.slice(0, 4).length - 1 ? 0 : currentSlider + 1);

    const bgImage =
        currentSlider === 0
            ? course[course.slice(0, 4).length - 1].img
            : course[currentSlider - 1].img;

    return (
        <div
            className="relative flex h-60 bg-center w-full transform flex-col items-center justify-center gap-5 overflow-hidden bg-contain duration-1000 ease-linear before:absolute before:inset-0 before:bg-black/50 sm:h-96 md:h-[600px] lg:gap-10 xl:flex-row"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* arrow */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
                {/* arrow left */}
                <button
                    onClick={prevSlider}
                    className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all duration-200"
                >
                    <svg viewBox="0 0 1024 1024" className="h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#0095FF"
                            d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                        />
                    </svg>
                </button>

                {/* arrow right */}
                <button
                    onClick={nextSlider}
                    className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all duration-200"
                >
                    <svg viewBox="0 0 1024 1024" className="h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                        <path
                            fill="#0095FF"
                            d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                        />
                    </svg>
                </button>
            </div>

            {/* text container */}
            <div className="absolute left-16 top-1/2 transform -translate-y-1/2 w-1/2 px-4 sm:px-6 md:px-8 text-white drop-shadow-lg">
                <h1 className="mb-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    {course[currentSlider].title}
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-2">
                    {course[currentSlider].shortDescription}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 line-clamp-2">
                    {course[currentSlider].des}
                </p>
                <button>
                    <Link
                        href={route("all.class")}
                        className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all"
                    >
                        Explore More
                    </Link>
                </button>
            </div>

            <div className="absolute -right-5 z-50 ml-auto w-1/2 overflow-hidden px-4 py-10 lg:-right-16">
                <div
                    className="flex items-center gap-4 duration-300 ease-linear"
                    style={{ transform: `translateX(-${currentSlider * 200}px)` }}
                >
                    {course.slice(0, 4).map((slide, inx) => (
                        <div
                            key={inx}
                            className={`relative h-[180px] min-w-[90px] sm:h-[200px] lg:h-[320px] lg:min-w-[184px] 
                                ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'} 
                                z-50 rounded-lg bg-black/50 shadow-lg shadow-black drop-shadow-lg duration-300 overflow-hidden`}
                        >
                            {!loadedImages[inx] && (
                                <div className="absolute inset-0 bg-gray-700 animate-pulse" />
                            )}
                            <img
                                loading="lazy"
                                width={184}
                                height={320}
                                src={slide.img}
                                className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[inx] ? 'opacity-100' : 'opacity-0'
                                    }`}
                                alt={slide.title}
                                onLoad={() => handleImageLoad(inx)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;